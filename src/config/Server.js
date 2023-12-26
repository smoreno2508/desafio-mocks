import express from "express";
import cors from "cors";
import { config } from "dotenv"; 

import rootRouter from "../routers/index.js";
import dbConnection from "./Database.js";
import errorHandler from "../middleware/errorHandlerMiddleware.js";

config();

export default class Server{

    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;
        this.connectDB();
        this.middlewares();
        this.routers();
        this.errorHandlers();

    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routers(){
        this.app.use("/", rootRouter);
    }

    errorHandlers(){
        this.app.use(errorHandler);
    }

    start(){
        this.httpServer = this.app.listen(this.PORT, () => {
            console.log(`Server running on port ${this.PORT}`);
        });
    }

}