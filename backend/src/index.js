require("dotenv").config();
const app = require("./app");
const {connectDatabase} =require("./config/db")

const port = process.env.PORT || 4000;

//connect the database
connectDatabase()

//listen the port
app.listen(port, (req, res) => {
  console.log(`Express is Running on ${port}`);
});
