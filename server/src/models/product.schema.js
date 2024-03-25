import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, "Product Name is required"],
            trim : true,
            maxLength : [ 120,"Product Name Should not be more than 120 characters" ],
        },
        price : {
            type : Number,
            required : [true, "Product Price is required"],
            maxLength : [ 6,"Product Price Should not be more than 5 characters" ],
        },
        description : {
            type : String,
        },
        ratings : {
            type : Number,
            default : 0
        },
        images : [
            {
                url : {
                    type : String,
                    required : true
                }
            }
        ],
        category : {
            type : String,
            required : true
        },
        stock : {
            type : Number,
            default : 0
        },
        sold : {
            type : Number,
            default : 0
        },
        collectionId : {
            type : mongoose.Schema.ObjectId,
            ref : 'Collection',
            required : true
        }
    },

    { timestamps: true }
)


export default mongoose.model('Product', productSchema);