import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema(
  {
    name : {
      type: String,
      required : ["true", "Collection Name is required"],
      trim : true,
      maxLength : [ 120,"Name Should not be more than 120 characters" ]
    }
    },

  { timestamps : true }
)

export default mongoose.model('Collection', collectionSchema);