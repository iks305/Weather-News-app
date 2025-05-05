import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { fetchWeather } from "./services/weatherService";
import "./styles.css";
import NewsFeed from "./components/NewsFeed";

// В разметке после компонента Forecast добавьте:
<div className="mt-12">
  <NewsFeed />
</div>;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Москва");

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);
        const data = await fetchWeather(city);
        setWeatherData(data.current);
        setForecastData(data.forecast);
        setError(null);
      } catch (err) {
        setError("Не удалось загрузить данные");
        setWeatherData(null);
        setForecastData([]);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="glass-card p-8 text-center">
          <div className="text-4xl mb-4">⏳</div>
          <h2 className="text-xl font-semibold">Загрузка данных...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="glass-card p-8 text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold">{error}</h2>
          <button
            onClick={() => setCity("Москва")}
            className="mt-4 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition"
          >
            Вернуться к Москве
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="max-w-6xl mx-auto">
        <SearchBar onSearch={setCity} />
        <CurrentWeather data={weatherData} />
        <h2 className="text-2xl font-semibold mb-4">Прогноз на 5 дней</h2>
        <Forecast data={forecastData} />
        <div className="mt-12">
          <NewsFeed />
        </div>
        <div className="mt-8 text-center text-sm opacity-70">
          Обновлено: {new Date().toLocaleString("ru-RU")}
        </div>
      </div>
    </div>
  );
}

export default App;
