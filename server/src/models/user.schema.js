import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import  AuthRoutes from '../utils/authRoles';

const userSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : ["true", "Name is required"],
            maxLength : [ 50,"Name Should not be more than 50 characters" ]
        },
        email : {
            type: String,
            required : ["true", "Email is required"],
            unique : true,
        },
        password : {
            type: String,
            required : ["true", "Password is required"],
            minLength : [ 8,"Password Should be atleast 6 characters" ],
            select : false
        },
        phone : {
            type: Number,
            required : ["true", "Phone Number is required"],
            unique : true,
            maxLength : [ 10,"Phone Should not be more than 10 characters" ]
        },
        role : {
            type: String,
            enum : Object.values(AuthRoutes),
            default : AuthRoutes.USER
        },

        forgotPasswordToken : String,
        forgotPasswordExpire : Date,

    },
    { timestamps: true }
)

// Encrypting Password before saving using bcrypt hashing algorithm 
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
       return next();
       this.password = await bcrypt.hash(this.password,10)
       next();
    }
})
// Decrypting password
userSchema.methods = {
    comparePassword : async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    }
}


export default mongoose.model('User', userSchema);