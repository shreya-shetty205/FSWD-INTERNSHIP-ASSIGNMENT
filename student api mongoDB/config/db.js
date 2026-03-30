const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shreya02shetty_db_user:3RbiqnFihFvG7fzr@cluster0.1ykcbwt.mongodb.net/");
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;