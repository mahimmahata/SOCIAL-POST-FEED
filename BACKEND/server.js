require("dotenv").config({path:"./src/.env"}); 
const app = require("./src/app");
const connectDB = require("./src/db/db");


connectDB();

app.listen(100, () => {
    console.log("server is running on PORT 100");
});

