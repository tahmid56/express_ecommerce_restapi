const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require("./routes/auth");
const cors = require('cors');


app.use(cors());
app.use(express.json());

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Db connected")
    })
    .catch((err)=>{
        console.log(err);
    })

app.use("/api", authRouter);

app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Server running on ${5000}`);
})