const {Blog}=require('../model/blog.model');
const axios=require('axios');


exports.fillDummyData=async()=>{
    await axios.get("http://jsonplaceholder.typicode.com/posts").then((res)=>{
        res.data.map(async(blog)=>{
            await Blog.create({
                title:blog.title,
                body:blog.body
            })
        })
    })
    console.log(" Demo data filled");
}