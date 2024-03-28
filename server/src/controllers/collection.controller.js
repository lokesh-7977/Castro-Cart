import Collection from "../models/collection.schema.js";
import handler from "../services/handler.js";
import CustomError from "../services/customError.js";


export const createCollection = handler(async (req, res) => {
    const {name} = req.body;

    if (!name) {
        throw new CustomError("Please provide name", 400);
    }

   const collection = await  Collection.create({ name });
   res.status(200).json({
       success : true,
       message : "Collection created successfully in DB",
       collection
   })
});


export const updateCollection = handler(async (req, res) => {
    const {name} = req.body;
    const  { id : collectionId } = req.params;

    if (!name) {
        throw new CustomError("Please provide name", 400);
    }

    const updatedCollection = await  Collection.findByIdAndUpdate(collectionId, { name }, { new : true , runValidators : true });

    if(!updatedCollection) {
        throw new CustomError("Collection not found", 404);
    }
   res.status(200).json({
       success : true,
       message : "Collection updated successfully in DB",
       collection
   })
});

export const deleteCollection = handler(async (req, res) => {
    const { id : collectionId } = req.params;
    const deleteCollection = await Collection.findByIdAndDelete(collectionId);

    if(!deleteCollection) {
        throw new CustomError("Collection to delete  not found", 404);
    }
    res.status(200).json({
        success : true,
        message : "Collection deleted successfully in DB",
        collection
    })
});



export const getAllCollections = handler(async (req, res) => {
    const collections = await Collection.find();

    if(!collections) {
        throw new CustomError("No collections found", 404);
    }

    res.status(200).json({
        success : true,
        message : "All collections fetched successfully",
        collections
    })

});