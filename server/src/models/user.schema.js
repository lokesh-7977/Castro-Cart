import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import crypto from 'crypto';
import AuthRoutes from '../utils/authRoles.js';
import config from '../config/index.js';

const { Schema } = mongoose;
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            maxLength: [50, "Name should not be more than 50 characters"]
        },
        
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email address"]
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minLength: [6, "Password should be at least 6 characters"],
            select: false
        },

        role: {
            type: String,
            enum: Object.values(AuthRoutes),
            default: AuthRoutes.USER
        },

        forgotPasswordToken: String,
        forgotPasswordExpire: Date,
    },
    { timestamps: true }
);

// Via Pre Hooks
// Encrypting Password before saving using bcrypt hashing algorithm
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Decrypting password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generating Token Using JSON Web Token
userSchema.methods.generateToken = function () {
    return JWT.sign({ _id: this._id }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRATION
    });
};

// Generating Forgot Password Token
userSchema.methods.generateForgotPasswordToken = function () {
    const forgotToken = crypto.randomBytes(20).toString('hex');
    this.forgotPasswordToken = crypto.createHash('sha256').update(forgotToken).digest('hex');
    // token expires in 30 minutes from generation time
    this.forgotPasswordExpire = Date.now() + 30 * 60 * 1000;
    return forgotToken;
};

export default mongoose.model('User', userSchema);
