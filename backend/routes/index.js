import { Router } from "express";
import employeeRouter from "./employee.js";

const router = Router();
router.use("/auth/", employeeRouter);
router.use("/employee/", employeeRouter);

export default router;
