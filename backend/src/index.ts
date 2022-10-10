import "reflect-metadata";
import {Request, Response} from "express";
import express from "express";
var cors = require('cors');
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";

// create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
// register all application routes
AppRoutes.forEach(route => {
    app[route.method](route.path, (request: Request, response: Response, next: Function) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});

// run app
app.listen(3001);

console.log("Express application is up and running on port 3001");
