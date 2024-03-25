import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    product: {
      type: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          count: Number,
          price: Number,
        },
      ],
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    address: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: ["true", "Phone Number is required"],
      unique: true,
      maxLength: [10, "Phone Should not be more than 10 characters"],
    },

    amount: {
      type: Number,
      required: true,
    },
    coupan: String,
    transactionId: String,

    status: {
      type: String,
      enum: ["ordered", "shipped", "completed", "cancelled"],
      default: "ordered",
    },
  },

  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
