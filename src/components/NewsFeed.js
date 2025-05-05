// components/NewsFeed.jsx
import { useState, useEffect } from "react";
import { fetchNews } from "../services/newsService";
import NewsArticle from "./NewsArticle";
import Categories from "./Categories";

const NewsFeed = () => {
  const [currentCategory, setCurrentCategory] = useState("technology");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await fetchNews(currentCategory);
        setArticles(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [currentCategory]);

  if (loading) {
    return (
      <div className="glass-card p-6 mb-8">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-300 bg-opacity-20 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-48 bg-gray-300 bg-opacity-20 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-6 mb-8 text-center">
        <div className="text-red-300 mb-2">⚠️ {error}</div>
        <button
          onClick={() => setCurrentCategory("technology")}
          className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition"
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 mb-8">
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />

      <h2 className="text-2xl font-bold mb-6">Последние новости</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsArticle key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
