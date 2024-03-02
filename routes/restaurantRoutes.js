import express from "express";
import { handleGetAllRestaurants} from "../controllers/restaurantController.js"

const router = express.Router();


router.get("/restaurant/all", handleGetAllRestaurants);



export default router;