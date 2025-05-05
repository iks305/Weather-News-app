import { useState } from "react";
import WeatherIcon from "./WeatherIcon";

const Forecast = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {data.map((day, index) => (
        <div
          key={index}
          className={`forecast-item glass-card p-4 text-center cursor-pointer ${
            activeIndex === index ? "bg-opacity-25" : ""
          }`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="font-medium mb-2">{day.date}</div>
          <div className="text-4xl my-3">
            <WeatherIcon iconCode={day.icon} />
          </div>
          <div className="text-xl font-semibold">{day.temp}°C</div>
          <div className="text-sm opacity-80 capitalize">{day.description}</div>
          <div className="flex justify-between mt-3 text-xs">
            <div>💧 {day.humidity}%</div>
            <div>🌬️ {day.wind} м/с</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
