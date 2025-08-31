const form = document.getElementById("shortenForm");
const urlInput = document.getElementById("urlInput");
const resultDiv = document.getElementById("result");
const shortUrlLink = document.getElementById("shortUrl");
const analyticsBtn = document.getElementById("analyticsBtn");
const analyticsDiv = document.getElementById("analytics");
const totalClicks = document.getElementById("totalClicks");
const clickList = document.getElementById("clickList");

let currentShortId = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:8001/url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: urlInput.value }),
  });

  const data = await response.json();

  if (data.shortUrl) {
    currentShortId = data.id;
    shortUrlLink.href = data.shortUrl;
    shortUrlLink.textContent = data.shortUrl;
    resultDiv.classList.remove("hidden");
  }
});

analyticsBtn.addEventListener("click", async () => {
  const response = await fetch(`http://localhost:8001/url/analytics/${currentShortId}`);
  const data = await response.json();

  totalClicks.textContent = `Total Clicks: ${data.totalClicks}`;
  clickList.innerHTML = "";

  data.analytics.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = new Date(entry.timestamp).toLocaleString();
    clickList.appendChild(li);
  });

  analyticsDiv.classList.remove("hidden");
});
