import express from "express";
import { handleGetAllRestaurants, handleAddRestaurant} from "../controllers/restaurantController.js"

const router = express.Router();


router.get("/restaurant/all", handleGetAllRestaurants);
router.post("/restaurant/add", handleAddRestaurant);


export default router;