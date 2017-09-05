import React from 'react';

import { currentWeather, minutelyData, dailyData, hourlyData } from './helpers/helper';
import { conditions } from './helpers/conditionsObj';
import MinutelyForecast from './graphs/MinutelyForecast';
import HourlyForecast from './graphs/HourlyForecast';
import DailyForecast from './graphs/DailyForecast';

const Forecast = ({weatherObj}) => {
    const currentDescription = currentWeather(weatherObj).icon;
    const rGBValues = conditions[currentDescription].color;
    const forecastStyle = { background: `rgb(${rGBValues})` };
    const containerStyle = { background: `rgba(${rGBValues}, .6)` };

    const minuteData = minutelyData(weatherObj);
    const hourData = hourlyData(weatherObj);
    const dayData = dailyData(weatherObj);
    // const chartStyle = {
    //   width: '250px',
    //   height: '250px'
    // }

    return (
      <section  className='forecast-container'
                style={ containerStyle }>
        {/* <MinutelyForecast forecastStyle={ forecastStyle }
                          minuteData={ minuteData }/> */}
        {/* <HourlyForecast forecastStyle={ forecastStyle }
                        hourData={ hourData }/> */}
        <DailyForecast  forecastStyle={ forecastStyle }
                        dayData={ dayData }/>
      </section>
    )
}

export default Forecast;
