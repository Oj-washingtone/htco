import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

const password = encodeURIComponent("Fu6#ttf6k593D9.");

const uri =
  `mongodb+srv://wiseman:${password}@cluster0.eqwsuju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

export default db;
