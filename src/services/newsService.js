// services/newsService.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (query = "technology") => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        from: new Date(Date.now() - 7 * 24 * 3600 * 1000)
          .toISOString()
          .split("T")[0], // Last 7 days
        sortBy: "publishedAt",
        apiKey: API_KEY,
        pageSize: 6,
      },
    });
    return response.data.articles;
  } catch (error) {
    throw new Error("Не удалось загрузить новости");
  }
};
