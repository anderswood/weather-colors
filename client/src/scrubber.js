// import { weatherData } from './stubbed';

export const currentWeather = (weatherData) => {

  return {
    currentTime: weatherData.currently.time,
    icon: weatherData.currently.icon,
    summary: weatherData.currently.summary,
    currentTemp: 80
  }
}

export const minutelyData = () => {
  // console.log(weatherData.minutely);

  return {
    forecastType: 'Minutely'
  }
}

export const hourlyData = () => {
  // console.log(weatherData.hourly);

  return {
    forecastType: 'Hourly'
  }
}

export const dailyData = () => {

}
