const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewUrl(req, res) {
  const { redirectUrl } = req.body; // ✅ FIX HERE

  if (!redirectUrl) {
    return res.status(400).json({ error: "URL is Required" });
  }

  const shortId = shortid();

  await URL.create({
    shortId,
    redirectUrl,
    visitHistory: [],
  });

  return res.json({ shortId });
}

module.exports = {
  handleGenerateNewUrl,
};
