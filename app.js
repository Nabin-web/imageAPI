const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const cors = require("cors");

const imageRoute = require("./image_route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/images", express.static(__dirname + "/Teamimages"));
app.use(imageRoute);

app.listen(3000);
