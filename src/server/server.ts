import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { apiReference } from '@scalar/express-api-reference'
import { RegisterRoutes } from '../routes/routes';
import swagger from "./swagger.json";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

RegisterRoutes(app);

app.use(
  "/scalar",
  apiReference({
    spec: {
      content: swagger,
      mimeType: "application/json"
    },
    layout: "modern", // or "classic"
    theme: "default"  // or "dark"
  })
);

app.listen(port, () => {
    console.log(`🚀 http://localhost:${port}`);
});