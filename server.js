import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import helloController  from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController from './controllers/tuits-controller.js';

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PW;
const uri = `mongodb+srv://${username}:${password}@cluster0.jb1wc.mongodb.net/webdev?retryWrites=true&w=majority`;
mongoose.connect(uri);

// Use middleware
const app = express();
app.use(cors());
app.use(express.json());

// Add endpoints for various APIs
helloController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);