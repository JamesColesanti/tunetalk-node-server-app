import express from 'express'
import cors from 'cors'
import TuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
import axios from 'axios';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);

const bearerTokenResponseData = await axios.post(
    "https://accounts.spotify.com/api/token",
    {
        grant_type: 'client_credentials',
        client_id: '428147ec52be42138c11e229e16d6c0b',
        client_secret: '1b8d85e6cb1c4aa0bc47458d581dc79d',
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
);

const access_token = bearerTokenResponseData['data']['access_token'];

const data = await axios.get(
    "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
);

console.log(data);

app.listen(process.env.PORT || 4000);