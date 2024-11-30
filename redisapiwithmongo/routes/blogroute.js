const express=require("express");
const {getAllBlogs}=require("../controllers/blogs.controller")
const router=express.Router();
router.get('/blogs',getAllBlogs);
module.exports=router;