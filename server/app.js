import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import routes from "./src/routes/index.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());



app.get("/", (_req, res) => {
  res.send("Welcome to  Ecomerce API Created By Lokesh Medharametla");
});

app.use("/api", routes);





app.all("*", (req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});


export default app;
