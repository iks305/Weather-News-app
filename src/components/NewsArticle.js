// components/NewsArticle.jsx
const NewsArticle = ({ article }) => {
  return (
    <div className="article-card glass-card p-4 transition duration-300 hover:bg-opacity-25">
      <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
        <img
          src={article.urlToImage || "https://via.placeholder.com/300x150"}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <span className="text-xs text-blue-300">{article.source?.name}</span>
        <h3 className="font-medium text-lg mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-3">
          {article.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>
            {new Date(article.publishedAt).toLocaleDateString("ru-RU")}
          </span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Читать →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
