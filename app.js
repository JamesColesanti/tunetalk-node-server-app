import express from 'express'
import cors from 'cors'
import session from "express-session";
import ReviewsController from "./controllers/reviews-controller.js";
import mongoose from "mongoose";
import UsersController from './controllers/users-controller.js';

const CONNECTION_STRING = process.env.DB_CONNECTION_TUNETALK;
mongoose.connect(CONNECTION_STRING);

const app = express();
console.log(CONNECTION_STRING);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());

UsersController(app);
ReviewsController(app);

app.listen(process.env.PORT || 4000);