const express=require("express");
const redis=require("redis");
const axios=require("axios");
const app=express();

let redisClient;
(
    async()=>{
        redisClient=redis.createClient();
        redisClient.on('error',(error)=>{
            console.log(error);
        })
        await redisClient.connect();
    }
)()

app.get("/",(req,res)=>{
    res.send("hello World!");
})
app.get('/getdata',async(req,res)=>{
    try {
        let data='';

        const cachedData=await redisClient.get('todos_data');
        if(cachedData){
            return res.json({data: JSON.parse(cachedData)});
        }
       const response= await axios.get('https://jsonplaceholder.typicode.com/todos').then(()=>{
            data=response.data;
        })
        await redisClient.set('todos_data',JSON.stringify(data));
        return res.json({data});
    } catch (error) {
        return res.json({error:error.msg});
    }
})
//with redis create api
app.get("/calculate", async(req,res)=>{
    try {
        let calculateSum=0;
        // check if data is already in cache in redis
        const cachedData=await redisClient.get('calculateSum');
        if(cachedData){
            return res.json({data:cachedData});
        }

        for(let i=0;i<10000000000;i++){
            calculateSum+=i;
        }
        await redisClient.set('calculateSum',calculateSum);
        return res.json({data:calculateSum})
    } catch (error) {
        return res.json({error:error.msg});
    }
})

app.listen(3000,()=>{
 console.log("server start on the port of 3000");
})