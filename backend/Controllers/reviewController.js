import Review from "../models/Reviewschema.js"
import Doctor from "../models/Doctorschema.js";

// get all reviews
export const getAllReviews = async (req, res) => {

    try {
        const reviews = await Review.find({});

            return res.status(200).json({ success: true, message: "successful",data:reviews });
        }
     catch (err) {
        res.status(404).json({ success: false, message: "No  found" });
    }
};

// create review
export const createReview = async(req,res)=>{
    if(!req.body.doctor) req.body.doctor=req.params.doctorId
    if(!req.body.user) req.body.user=req.params.userId
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();
    
        // After creating a new review, update the review array of the tour
        await Doctor.findByIdAndUpdate(req.body.doctor, {
          $push: { reviews: savedReview._id },
        });
    
        res.status(200).json({
          success: true,
          message: "Review submitted",
          data: savedReview,
        });
      }
      catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({
            success: false,
            message: 'Internal Server Error', // Provide a more generic message
            error: error.message // Optionally include the actual error message
        });
    }
}    