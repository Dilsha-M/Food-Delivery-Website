import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dilsham190:9747056389@cluster0.yx5tm.mongodb.net/food-delivery').then(()=>console.log("DB Connected"))
}