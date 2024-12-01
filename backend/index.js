import express from "express";
import Allroutes from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const Port = 8001;
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/employee-db").then(() => {
  console.log("database connected ");
});
app.use("/api/v1/", Allroutes);

app.listen(Port, () => {
  console.log(`server is running on ${Port}`);
});
