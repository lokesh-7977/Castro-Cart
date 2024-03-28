import User from "../models/user.schema.js";
import handler from "../services/handler.js";
import CustomError from "../services/customError.js";
import mailHelper from "../utils/mailHelper.js";

export const cookieOptions = {
  expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

export const signup = handler(async (req, res) => {
  const { name, email, password ,role} = req.body;

  if (!name || !email || !password) {
    throw new CustomError("Please provide name, email, and password", 400);
  }

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    throw new CustomError("User already exists", 400);
  }

  const user = await User.create({ name, email, password, role });

  const token = user.generateToken();

  res.cookie("token", token, cookieOptions);

  user.password = undefined;

  res.status(200).json({
    success: true,
    token,
    user,
  });
});

export const login = handler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError("Please provide email and password", 400);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new CustomError("Invalid credentials", 400);
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (isPasswordMatch) {
    const token = user.generateToken();
    user.password = undefined;
    res.cookie("token", token, cookieOptions);
    return res.status(200).json({
      success: true,
      token,
      user,
    });
  }
  throw new CustomError("Password is incorrect", 400);
});

export const logout = handler(async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User Logged Out",
  });
});

export const getProfile = handler(async (req, res) => {
  const { user } = req;

  if (!user) {
    throw new CustomError("User not found", 404);
  }

  res.status(200).json({
    success: true,
    user,
  });
});

export const forgotPassword = handler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError("User not found", 404);
  }

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/auth/resetpassword/${resetToken}`;

  const message = `Hey ${user.name},\n\n You have requested to reset your password. Please make a PUT request to: \n\n ${resetUrl} \n\n If you have not requested this email, then ignore it.  \n\n Thanks`;

  try {
    await mailHelper ({
      to: user.email,
      subject: "Password Reset Mail",
      text: message,
    });
  } catch (error) {
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
  }
});


export const resetPassword = handler(async (req, res) => {
  const { resetToken } = req.params;
  const { password } = req.body;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    throw new CustomError("Invalid Token", 400);
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Reset Success",
    user
  });
});