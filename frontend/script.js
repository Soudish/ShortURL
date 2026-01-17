const form = document.getElementById("shortenForm");
const urlInput = document.getElementById("urlInput");
const resultDiv = document.getElementById("result");
const shortUrlLink = document.getElementById("shortUrl");

// 🔥 USE LIVE BACKEND URL
const API_BASE = "https://shorturl.onrender.com"; // ← change to your Render URL

let currentShortId = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(`${API_BASE}/url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      redirectUrl: urlInput.value, // ✅ FIXED
    }),
  });

  const data = await response.json();

  if (data.shortId) {
    currentShortId = data.shortId;

    const shortUrl = `${API_BASE}/${currentShortId}`;

    shortUrlLink.href = shortUrl;
    shortUrlLink.textContent = shortUrl;

    resultDiv.classList.remove("hidden");
  } else {
    alert("Error creating short URL");
  }
});
