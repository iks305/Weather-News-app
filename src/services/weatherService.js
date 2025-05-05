import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
  try {
    const [current, forecast] = await Promise.all([
      axios.get(
        `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}&lang=ru`
      ),
      axios.get(
        `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=ru&cnt=40`
      ),
    ]);

    return {
      current: current.data,
      forecast: processForecast(forecast.data.list),
    };
  } catch (error) {
    throw new Error("Не удалось загрузить данные");
  }
};

const processForecast = (data) => {
  const daily = {};
  data.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString("ru-RU", {
      weekday: "short",
    });
    if (!daily[date]) {
      daily[date] = {
        temp: Math.round(item.main.temp),
        icon: item.weather[0].icon,
        description: item.weather[0].description,
        humidity: item.main.humidity,
        wind: item.wind.speed,
      };
    }
  });
  return Object.entries(daily).map(([date, data]) => ({ date, ...data }));
};
