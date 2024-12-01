import { Router } from "express";
import {
  createEmployee,
  getAllEmployee,
  updateEmployee,
  searchEmplyee,
  getEmployeeById,
  deleteById,
} from "../controller/employe.controller.js";

const employeeRouter = Router();
employeeRouter.get("/", getAllEmployee);
employeeRouter.get("/:id", getEmployeeById);
employeeRouter.delete("/:id", deleteById);
employeeRouter.post("/", createEmployee);
employeeRouter.put("/:id", updateEmployee);

export default employeeRouter;
