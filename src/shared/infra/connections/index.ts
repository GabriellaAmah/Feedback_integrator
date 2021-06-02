import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()


export let mongooseConnection = mongoose
  .connect(process.env.MONGO_URL || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => connection)
  .catch((err) => {
    console.log(err)
    process.exit(0);
  });
