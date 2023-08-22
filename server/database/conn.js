const mongoose=require("mongoose")

const conn=()=>{
    try{
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database connected ")
}).catch((err)=>{
    console.log("Database disconnected",err)
})
    }catch(err){
        console.log("Database Failed")
    }
}

module.exports={
    conn,
}