import React from 'react';
import moment from 'moment';

import { currentWeather } from './helpers/helper';

const CurrentCond = ({weatherObj}) => {
  const currentData = currentWeather(weatherObj);
  const time = moment.unix(currentData.currentTime).format('h:mm a');
  const date = moment.unix(currentData.currentTime).format('MMMM Do');
  const temp = currentData.currentTemp;
  const summary = currentData.summary.toLowerCase();

  return (
    <section className='Current-container'>
      <h2 className='Current-descr'>Howdy! It's {time} on {date} and your local weather is {summary}</h2>
      <h2 className='Current-temp'>{Math.round(temp)}°F</h2>
    </section>
  )
}

export default CurrentCond;
