import express from 'express'
import cors from 'cors'
import ReviewsController from "./controllers/reviews-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_TUNETALK;
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
ReviewsController(app);

app.listen(process.env.PORT || 4000);