const news = document.getElementById("news");

const API_KEY = "71a113c54d5d6cfc5adb9707229090ef";

async function loadNews() {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=hi&country=in&max=10&apikey=${API_KEY}`
    );

    const data = await res.json();

    news.innerHTML = "";

    data.articles.forEach(article => {
      news.innerHTML += `
        <div style="background:#fff;padding:15px;margin:15px 0;border-radius:10px;box-shadow:0 2px 8px #ccc;">
          <h3>${article.title}</h3>
          <p>${article.description || ""}</p>
          <a href="${article.url}" target="_blank">पूरी खबर पढ़ें</a>
        </div>
      `;
    });

  } catch (e) {
    news.innerHTML = "<h3>न्यूज़ लोड नहीं हो सकी।</h3>";
  }
}

loadNews();
