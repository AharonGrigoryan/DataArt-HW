
//Required External Modules
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
const { port } = require('../config');

// App Variables

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(port as string, 10);

const app = express();


// App Configuration

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu", itemsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

// Server Activation

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});