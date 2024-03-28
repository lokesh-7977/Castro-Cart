import Product from "../models/product.schema.js";
import Order from "../models/order.schema.js";
import Coupan from "../models/coupan.schema.js";
import handler from "../services/handler.js";
import CustomError from "../services/customError.js";
import razorpay from "../config/razorpay.config.js";

export const generateRazorPayOrderId = handler(async (req, res) => {
    const { products, couponCode } = req.body;

    if (!products || products.length === 0) {
        throw new CustomError("Please provide products", 400);
    }

    let totalAmount = 0;
    let discountAmount = 0;

    await Promise.all(products.map(async (product) => {
        const { productId, quantity } = product;
        const productData = await Product.findById(productId);

        if (!productData) {
            throw new CustomError("Product not found", 404);
        }

        if (productData.stock < quantity) {
            throw new CustomError("Product out of stock", 400);
        }

        totalAmount += productData.price * quantity;
    }));

    if (couponCode) {
        const coupon = await Coupan.findOne({ code: couponCode });

        if (!coupon) {
            throw new CustomError("Invalid coupon code", 400);
        }

        discountAmount = (totalAmount * coupon.discount) / 100;
    }

    totalAmount -= discountAmount;

    const options = {
        amount: Math.round(totalAmount * 100),
        currency: "INR",
        receipt: `receipt_order_${new Date().getTime()}`,
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
        throw new CustomError("Order creation failed", 500);
    }

    res.status(200).json({
        success: true,
        message: "Order created successfully",
        order,
    });
});

export const generateOrder = handler(async (req, res) => {
    const { products, couponCode } = req.body;

    if (!products || products.length === 0) {
        throw new CustomError("Please provide products", 400);
    }
    const order = await Order.create({
        user: req.user._id,
        products,
        couponCode,
    });
    
    res.status(200).json({
        success: true,
        message : "Order generated successfully",
        order,
    });
});

export const getOrders = handler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        message: "User orders",
        orders
    });
});

export const getOrderAdmin = handler(async (req, res) => {
    const { orderId } = req.params;

    if (!orderId) {
        throw new CustomError("Please provide orderId", 400);
    }

    const order = await Order.findById(orderId);

    res.status(200).json({
        success: true,
        message: "Order details",
        order,
    });
});

export const updateOrderStatus = handler(async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!orderId || !status) {
        throw new CustomError("Please provide orderId and status", 400);
    }

    const order = await Order.findById(orderId);

    if (!order) {
        throw new CustomError("Order not found", 404);
    }

    order.status = status;
    await order.save();

    res.status(200).json({
        success: true,
        message: "Order status updated successfully",
        order,
    });
});

export const deleteOrder = handler(async (req, res) => {
    const { orderId } = req.params;

    if (!orderId) {
        throw new CustomError("Please provide orderId", 400);
    }

    const order = await Order.findByIdAndDelete(orderId);

    res.status(200).json({
        success: true,
        message: "Order deleted successfully",
        order,
    });
});

export const getOrdersAdmin = handler(async (req, res) => {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        message: "All orders",
        orders
    });
});

export const updateOrderStatusAdmin = handler(async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!orderId || !status) {
        throw new CustomError("Please provide orderId and status", 400);
    }

    const order = await Order.findById(orderId);

    if (!order) {
        throw new CustomError("Order not found", 404);
    }

    order.status = status;
    await order.save();

    res.status(200).json({
        success: true,
        message: "Order status updated successfully",
        order,
    });
});