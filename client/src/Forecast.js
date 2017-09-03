import React from 'react';

import { currentWeather } from './scrubber';
import { conditions } from './conditionsObj';

const Forecast = ({weatherObj}) => {
    let currentDescription = currentWeather(weatherObj).icon;
    let rGBValues = conditions[currentDescription].color;
    let divStyle = { background: `rgb(${rGBValues})` };

    return (
      <section className='forecast-container'>Forecasts
        <div className='forecast-minutely' style={divStyle}></div>
      </section>
    )
}

export default Forecast;
