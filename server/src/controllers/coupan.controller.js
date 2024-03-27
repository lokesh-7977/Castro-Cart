import Coupan from "../models/coupan.schema.js";
import handler from "../services/handler.js";
import CustomError from "../services/customError.js";

export const createCoupan = handler(async (req, res) => {
  const { code, discount, expiryDate } = req.body;
  if (!code || !discount || !expiryDate)
    throw new CustomError("Please fill all fields", 400);

  const coupan = await Coupan.create({ code, discount, expiryDate });

  res.status(201).json({
    success: true,
    message : "Coupan created successfully",
    coupan
  });
});


export const getCoupans = handler(async (req, res) => {
    const allCoupans = await Coupan.find();

    if(!coupans) throw new CustomError("No coupans found", 404);

    res.status(200).json({
        success: true,
        coupans
    });
});

export const updateCoupan = handler(async (req, res) => {
    const { id } = req.params;
    const { code, discount, expiryDate } = req.body;
    if (!code || !discount || !expiryDate)
      throw new CustomError("Please fill all fields", 400);

    const coupan = await Coupan.findByIdAndUpdate(id, { code, discount, expiryDate }, { new: true });

    if(!coupan) throw new CustomError("Coupan not found", 404);

    res.status(200).json({
        success: true,
        message: "Coupan updated successfully",
        coupan
    });
})


export const deleteCoupan = handler(async (req, res) => {
    const { id } = req.params;
    const coupan = await Coupan.findByIdAndDelete(id);

    if(!coupan) throw new CustomError("Coupan not found", 404);

    res.status(200).json({
        success: true,
        message: "Coupan deleted successfully"
    });
});

export const activeCoupan = handler(async (req, res) => {
    const { code } = req.body;
    if (!code) throw new CustomError("Please provide code", 400);

    if (!req.user) throw new CustomError("Please login to apply coupan", 401);

    const coupan = await Coupan.findOne({ code: code });

    if (!coupan) throw new CustomError("Coupan not found", 404);

    const currentDate = new Date();
    const expiryDate = new Date(coupan.expiryDate);

    if (currentDate > expiryDate) {
        res.status(200).json({
            success: true,
            message: "Coupan has expired",
            active: false,
        });
    } else {
        res.status(200).json({
            success: true,
            message: "Coupan is active",
            active: true,
        });
    }
});

