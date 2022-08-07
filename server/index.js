// const express = require("express");
import express from "express";
import monggose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/user.router";
import commentRouter from "./router/comment.router";
import videoRouter from "./router/video.router";

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

app.use("/api/users", userRouter);
app.use("/api/comments", commentRouter);
app.use("/api/videos", videoRouter);

app.listen(8800, () => {
  connect();
  console.log("Connected");
});
