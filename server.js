import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { displayData } from "./utils/display.js";

const app = express();
const port = 5000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success:true,
        displayData
    });
});

app.listen(port, () => console.log(`running on port ${port}`));