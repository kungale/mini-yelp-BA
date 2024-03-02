import dotenv from "dotenv";
import morgan from "morgan";
import express from "express"; 
import cors from 'cors';
import connectDB from './utils/connectDB.js';


dotenv.config();
const app = express();
app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.json());




connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
