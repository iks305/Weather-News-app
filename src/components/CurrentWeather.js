import WeatherIcon from "./WeatherIcon";

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">{data.name}</h2>
          <p className="text-lg opacity-80">
            {new Date(data.dt * 1000).toLocaleDateString("ru-RU", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </p>
        </div>
        <div className="flex items-center">
          <WeatherIcon iconCode={data.weather[0].icon} />
          <div>
            <div className="text-5xl font-bold">
              {Math.round(data.main.temp)}°C
            </div>
            <div className="text-lg capitalize">
              {data.weather[0].description}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
          <div className="text-sm opacity-80">Ощущается</div>
          <div className="text-xl font-semibold">
            {Math.round(data.main.feels_like)}°C
          </div>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
          <div className="text-sm opacity-80">Влажность</div>
          <div className="text-xl font-semibold">{data.main.humidity}%</div>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
          <div className="text-sm opacity-80">Ветер</div>
          <div className="text-xl font-semibold">{data.wind.speed} м/с</div>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
          <div className="text-sm opacity-80">Давление</div>
          <div className="text-xl font-semibold">
            {Math.round(data.main.pressure * 0.75)} мм рт.ст.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
