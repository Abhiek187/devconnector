// TODO: npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
// TODO: require 😑, import 😊
const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
