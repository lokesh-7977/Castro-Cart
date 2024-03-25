import mongoose from 'mongoose';

const coupanSchema = new mongoose.Schema(
    {
        code : {
            type : String,
            required : [true, "Code is required"],
            unique : true
        },
        discount : {
            type : Number,
            default : 0
        },
       active : {
            type : Boolean,
            default : true
        },
        expiry : {
            type : Date,
            required : [true, "Expiry is required"]
        },
    },
    
    {timestamps : true})

export default mongoose.model('Coupan',coupanSchema)