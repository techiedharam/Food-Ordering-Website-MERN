import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://dharmender7077:Jairadhe240299@cluster0.u4nvt.mongodb.net/food-ordering').then(() => console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.