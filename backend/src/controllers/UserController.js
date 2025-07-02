import user from "../models/UserModel.js"
import userValidationSchema from "../middleware/validation/UserValidation.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

export const register = async (req,res)=>{
    try {
        const {name,username,email,password} = req.body

        const {error} = userValidationSchema.validate(req.body)

        if (error) {
            return res.status(400).json({message:error.details[0].message})
        }

        const existUser = await user.findOne({email})

        if (existUser) {
            return res.status(400).json({message:"User already exists"})
        }

        const hasedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({
      image: imageUrl,
      name,
      username,
      email,
      password: hasedPassword,
    });

    await newUser.save();

    const token = jwt.sign({userId: newUser._id},process.env.JWT_SECRET,{expiresIn:"2m"})

    return res.status(201).json({
        message:"User create successfully",
        newUser,
        token
    })

    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}