const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");

exports.welcomeUser = catchAsync(async (req,res,next)=>{
    const {name} = await User.findById(req.user.id);
    res.status(200).json({
        status:"Success",
        message:`Welcome ${name}`
    })
})