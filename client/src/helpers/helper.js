import moment from 'moment';

import { geoKey } from './key';

export const currentWeather = (weatherData) => {
  return {
    currentTime: weatherData.currently.time,
    icon: weatherData.currently.icon,
    summary: weatherData.currently.summary,
    currentTemp: weatherData.currently.temperature
  }
}

export const fetchWeather = (key, lat, long) => {
  return fetch('/api/weather', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      key: key,
      lat: lat,
      long: long
    })
  })
  .then(jsonWeather => jsonWeather.json())
}

export const fetchCoords = (address) => {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoKey}`)
}

export const minutelyData = (weatherData) => {
  let xTickValuesArr = [];
  let xTickFormatArr = [];

  for (let i=0; i < weatherData.minutely.data.length; i++) {
    const time = moment.unix(weatherData.minutely.data[i].time).format('h:mm a');
    xTickFormatArr.push(time);
    xTickValuesArr.push(i + 1);
  }

  return {
    forecastType: 'Minutely',
    xTickValues: xTickValuesArr,
    xTickFormat: xTickFormatArr,
    data: weatherData.minutely.data
  }
}

export const hourlyData = (weatherData) => {
  let xTickValuesArr = [];
  let xTickFormatArr = [];

  for (let i=0; i < weatherData.hourly.data.length; i++) {
    const time = moment.unix(weatherData.hourly.data[i].time).format('h a');
    xTickFormatArr.push(time);
    xTickValuesArr.push(i + 1);
  }

  return {
    forecastType: 'Hourly',
    xTickValues: xTickValuesArr,
    xTickFormat: xTickFormatArr,
    data: weatherData.hourly.data
  }
}

export const dailyData = (weatherData) => {
  let xTickValuesArr = [];
  let xTickFormatArr = [];

  for (let i=0; i < weatherData.daily.data.length; i++) {
    const time = moment.unix(weatherData.daily.data[i].time).format('dddd');
    xTickFormatArr.push(time);
    xTickValuesArr.push(i + 1);
  }

  return {
    forecastType: 'Daily',
    xTickValues: xTickValuesArr,
    xTickFormat: xTickFormatArr,
    data: weatherData.daily.data
  }

}
