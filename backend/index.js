const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoute = require("./routes/user.route");
const linkRoute = require("./routes/links.route");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const device = require("express-device");
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(device.capture());
app.use(cookieParser());
app.use("/api/user", userRoute);
app.use("/api/link", linkRoute);
app.get("/", (req, res) => {
  res.send("hello");
});
app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("port is live now on", PORT);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("mongodb is connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
