// const express = require("express");
import express from "express";
import monggose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments";
import videoRoutes from "./routes/videos";

dotenv.config();
const app = express();

// 连接之前需要设置网络权限
const connect = () => {
  monggose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("error", err);
      throw err;
    });
};

app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.listen(8800, () => {
  connect();
  console.log("Connected");
});
