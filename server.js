import express from "express";
import connectDB from "./config/db.js";
import path from "path";

import users from "./routes/api/users.js";
import auth from "./routes/api/auth.js";
import profile from "./routes/api/profile.js";
import posts from "./routes/api/posts.js";

const app = express();

// Connect database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
