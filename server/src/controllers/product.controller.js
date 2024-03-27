import mongoose from 'mongoose';
import formidable from 'formidable';
import Product from '../models/product.schema';
import { s3FileDelete,s3FileUpload } from '../services/imageUpload';
import handler from "../services/handler";
import CustomError from '../services/customError';

export const addProduct = handler(async (req, res) => {
    const form = new formidable({ multiples: true , keepExtensions: true });
    form.parse(req, async function (err,feilds,files){
        if(err){
            throw new CustomError(err.message, 500);
        }

        let productId = new mongoose.Types.ObjectId().toHexString();

        // `product-${productId}`
        console.log(files.image.path,feilds,files);




    }
    )

});


