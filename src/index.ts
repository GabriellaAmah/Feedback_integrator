import http from "http";
import app from "./app";
import dotenv from "dotenv";
import ServerHandler from "./utils/serverHandler";
import mongoose from "mongoose";

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost/feedback", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(port);
  }).catch(err => {
      console.log(err)
      process.exit(1)
  })

server.on("error", ServerHandler.onError);
server.on("listening", ServerHandler.onListen);
