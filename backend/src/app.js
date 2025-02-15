import { config } from 'dotenv';
config();
import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes.js";

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/ai/", aiRoutes);
app.post("/api/v1", (req, res) => {
   console.log(req.body);
});
export default app;