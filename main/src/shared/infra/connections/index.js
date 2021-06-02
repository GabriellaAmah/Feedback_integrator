import mongoose from "mongoose";
export let mongooseConnection = mongoose
    .connect(process.env.MONGO_URL || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((connection) => connection)
    .catch(() => {
    process.exit(0);
});
