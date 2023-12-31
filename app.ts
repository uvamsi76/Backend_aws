import express, {Request, Response,NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import adminrouter  from "./routes/admin";
import userrouter from "./routes/user"
import commonrouter from "./routes/common";
const PORT =3000;

const app=express();

app.use(bodyParser.json())
app.use(cors())
app.use(express.json());

app.use(commonrouter)
app.use("/admin",adminrouter)
app.use("/users",userrouter)
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://uvamsi76:ybjSWKpCunZoIvwY@cluster0.vtksuht.mongodb.net/nothing', { dbName: "nothing" });

app.get('/',(req,res)=>{
  res.json("working fine mowa test")
})

app.listen(3000, () => console.log('Server running on port 3000 ok'));