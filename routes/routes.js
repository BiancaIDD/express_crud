import express from "express";

// Import School Controller
import {
  //importramos todos los Controller que tenemos
  getSchools,
  getSchoolById,
  createSchool,
  updateSchool,
  deleteSchool,
} from "../controllers/schools.js";

const router = express.Router();

// Route get all schools
router.get("/schools", getSchools);
// Route get product by id
router.get("/schools/:id", getSchoolById);
// Route create a new p
router.post("/schools", createSchool);
// Route update product by id
router.put("/schools/:id", updateSchool);
// Route delete product by id
router.delete("/schools/:id", deleteSchool);

// export router
export default router;
