import User from '../models/user.schema.js';

import handler from "../services/handler.js";
import CustomError from "../services/customError.js";

export const cookieOptions = {
  expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  httpOnly: true,
}

export const signup = handler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomError("Please provide name, email and password", 400);
  }

  const existingUser = await User.findOne({ email : email });
  if(existingUser) {
    throw new CustomError("User already exists", 400);
  }

  const user  = await User.create({ name, email, password });

  const token = user.generateToken();

  res.cookie('token', token, cookieOptions);

  user.password = undefined;

  res.status(200).json({
    sucess : true,
    token, 
    user
  })

});

export const login = handler(async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    throw new CustomError("Please provide email and password", 400);
  }

  const user = await User.findOne({email}).select('+password');

  if(!user){
    throw new CustomError("Invalid credentials", 400);
  }

  const isPasswordMatch = await user.comparePassword(password);

  if(!isPasswordMatch){
    const token = user.generateToken();
    user.password = undefined;
    res.cookie('token', token, cookieOptions);
    return res.status(200).json({
      success : true,
      token,
      user
    })
  }
  throw new CustomError("Password is incorrect", 400);

});


export const logout = handler(async (req, res) => {
  res.cookie('token', null,{
    expires: new Date(Date.now()),
    httpOnly: true
  })

  res.status(200).json({
    success : true,
    message : "User LogedOut"
  })
})

export const getProfile = handler(async (req, res) => {  

const {user} = req;

if(!user){
  throw new CustomError("User not found", 404);
}

  res.status(200).json({
    success : true,
    user
  })
});