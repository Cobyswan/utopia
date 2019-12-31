const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authorizationRoutes = require("./Routes/authorizationRoutes");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");
require('dotenv').config({ path: require('find-config')('.env') })

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

// app.use("/api", authorizationRoutes);
// app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  ).then(() => console.log("Connected to Database")).catch((err) => err );

 
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server alive on ${port}`);
});
