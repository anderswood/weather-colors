import moment from 'moment';
import tz from 'moment-timezone';

import { geoKey } from './key';

export const currentWeather = (weatherData) => {
  return {
    currentTime: weatherData.currently.time,
    icon: weatherData.currently.icon,
    summary: weatherData.currently.summary,
    currentTemp: weatherData.currently.temperature,
    timezone: weatherData.timezone
  }
}

export const fetchWeather = (lat, long) => {
  return fetch('/api/weather', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      lat: lat,
      long: long
    })
  })
  .then(jsonWeather => jsonWeather.json())
}

export const fetchCoords = (address) => {
  return fetch('/api/coords', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({address: address})
  })
}

export const minutelyData = (weatherData) => {
  let xTickValuesArr = [];
  let xTickFormatArr = [];
  const timezone = weatherData.timezone;

  for (let i=0; i < weatherData.minutely.data.length; i++) {
    const time = moment.unix(weatherData.minutely.data[i].time).tz(timezone).format('h:mm a');
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
  const timezone = weatherData.timezone;

  for (let i=0; i < weatherData.hourly.data.length; i++) {
    const time = moment.unix(weatherData.hourly.data[i].time).tz(timezone).format('h a');
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
  let dataArr = [];
  const timezone = weatherData.timezone;

  for (let i=0; i < weatherData.daily.data.length; i++) {
    const time = moment.unix(weatherData.daily.data[i].time).tz(timezone).format('dddd');
    const yVal = weatherData.daily.data[i].temperatureHigh;

    xTickFormatArr.push(time);
    xTickValuesArr.push(i + 1);
    dataArr.push({x: i+time, y: yVal});
  }

  return {
    forecastType: 'Daily',
    xTickValues: xTickValuesArr,
    xTickFormat: xTickFormatArr,
    data: dataArr
  }

}
