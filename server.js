// Server converted to module to support imports
import express from "express";
import connectDB from "./config/db.js";
import path from "path";

import users from "./routes/api/users.js";
import auth from "./routes/api/auth.js";
import profile from "./routes/api/profile.js";
import posts from "./routes/api/posts.js";

const app = express();

// Connect to database
connectDB();

// Initialize middleware: parse JSON
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

  // Load index.html upon receiving any GET request (the client will render the rest)
  app.get("*", (req, res) => {
    // Fixes the 404 screen on Heroku since __dirname is not defined
    if (typeof __dirname === "undefined") {
      const __dirname = path.dirname(new URL(import.meta.url).pathname);
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    } else {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    }
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
