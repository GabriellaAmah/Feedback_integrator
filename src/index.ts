import appServer from "./server/server";
import dotenv from "dotenv";
import Database from "./database/db";

dotenv.config();

 new Database({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
}) 

const server: appServer = appServer.bootstrap();

server.run(process.env.PORT, () => {
  console.log(`this server has started on ${process.env.PORT}`);
});
