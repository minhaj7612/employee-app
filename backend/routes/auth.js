import { Router } from "express";
import {
  createEmployee,
  getAllEmployee,
  updateEmployee,
  searchEmplyee,
} from "../controller/employe.controller.js";
import { login } from "../controller/auth.controller.js";

const authRoute = Router();

authRoute.post("/login", login);

export default authRoute;
