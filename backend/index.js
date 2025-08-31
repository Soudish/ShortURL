const express = require('express');
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connect');
const URL = require('./models/url');
const cors = require("cors");

const app = express();
const PORT = 8001;

// Connect to MongoDB
connectToMongoDB('mongodb://localhost:27017/short-url')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use("/url", urlRoute);

// Redirect short URL
app.get('/:shortId', async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const urlEntry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!urlEntry) return res.status(404).send("Short URL not found");

    res.redirect(urlEntry.redirectUrl);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
