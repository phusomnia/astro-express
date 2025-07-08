import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { apiReference } from '@scalar/express-api-reference'
import { RegisterRoutes } from '../routes/routes';
import swagger from "./swagger.json";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

RegisterRoutes(app);

app.use("/swagger.json", express.static(path.join(__dirname, "swagger.json")));

app.use(
  "/scalar",
  apiReference({
    theme: "bluePlanet",
    url: "/swagger.json",
  })
);

app.listen(port, () => {
    console.log(`🚀 http://localhost:${port}`);
});