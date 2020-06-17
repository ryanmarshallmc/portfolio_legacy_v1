import React, { useEffect, useState } from "react";
import "./Thoughts.scss";

const Thoughts = ({ goTo }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ryanmchenry2"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items);
      });
  }, []);

  function stripHtml(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent.slice(0, 500);
  }

  function openArticle(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="Thoughts">
      <h2>things i've written</h2>
      {articles &&
        articles.map((article) => (
          <div
            onClick={() => openArticle(article.link)}
            className="Article"
            key={article.link}
          >
            <div>
              <img src="/medium.png" alt="Medium" />
              <h4>{article.title}</h4>
            </div>
            <p>{stripHtml(article.description)}</p>
            <h6>tags: {article.categories.map((cat) => cat).join(", ")}</h6>
          </div>
        ))}

      <div>
        <button onClick={() => goTo("/contact")}>
          cool words! let's talk?
        </button>
      </div>
    </div>
  );
};

export default Thoughts;
