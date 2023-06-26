const mongoose  = require("mongoose")

module.exports.dbConnect=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommers',{
            useNewURLParser:true
        });
        console.log("data base connecnted")
    } catch (error) {
        console.log(error)
    }
}