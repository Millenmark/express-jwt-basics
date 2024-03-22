import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import connectDB from "./config/connectDB.js";
import routes from "./route/index.js";

import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

/** ROUTES */
app.use("/api/v1", routes);

/** MIDDLEWARE AFTER ROUTES */
app.use(notFound);
app.use(errorHandler);

/** RUNNING THE SERVER */
const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Server is already running on port: ${port}`)
);
