const mongoose=require("mongoose");
const { fillDummyData } = require("../action/fillDummyData");

exports.dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.URL);
        await fillDummyData()
        console.log("database connected")
        
    } catch (error) {
        console.log("error occured while connecting",error);
        process.exit(1);
    }
}