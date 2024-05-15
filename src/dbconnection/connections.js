import mongoose from 'mongoose'
require('dotenv').config()

const connections = async ()=>{
    mongoose.connect(process.env.URI)
    .then((data)=>{
        console.log("Database has been connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default connections