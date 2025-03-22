const mongoose = require('mongoose');
require('dotenv').config();

const Mongo = process.env.MONGO_URL;

if (!Mongo) {
    console.error("MongoDB connection string is missing!");
    process.exit(1);
}

mongoose.connect(Mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>  {
        console.log("Connection is successful");
    })
    .catch((err) => {
        console.error("MongoDB failed to connect", err);
    });  
