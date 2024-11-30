const mongoose=require("mongoose");

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }

})
const Blog=mongoose.model('Blog',blogSchema);
exports.Blog=Blog;