const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to Database");
})
.catch((err) => {
    console.log("database connection error");
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '657b6a8884f4b3bb3b1b6a14'}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();