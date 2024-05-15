import express from "express";
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

// Nested route for reviews
router.use("/:doctorId/reviews", reviewRouter);

// Get single doctor by ID
router.get('/:id', getSingleDoctor);

// // Get doctor profile
// router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

// // Get all doctors

router.get('/', getAllDoctor);

// // Update doctor by ID
 router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor);

// // Delete doctor by ID
 router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor);

export default router;

