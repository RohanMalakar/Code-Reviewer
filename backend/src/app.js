import { config } from 'dotenv';
config();
import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes.js";

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/ai", aiRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
export default app;