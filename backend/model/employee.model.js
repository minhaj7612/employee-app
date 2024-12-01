import mongoose from "mongoose";
import { type } from "os";

const Schema = mongoose.Schema;

const EmpSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  department: String,
  doj: String,
  hobbies: [String],
  address: String,
  gender: String,
});

export default mongoose.model("Emp", EmpSchema);
