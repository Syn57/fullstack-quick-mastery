import express from "express";
import cors from "cors";
import appRouter from "./presentation/routes/index.js";
import "reflect-metadata";
import initilizeDatabase from "./data/db/models/1-index.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/", appRouter);

const PORT = 3002;

/**
 * @description Initialize the database that will be used in this app
 * 
 * Note: This is a temporary solution. Idk where the best practice to put this function call.
 */
initilizeDatabase()

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



