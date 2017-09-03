import React from 'react';
import moment from 'moment';

import { currentWeather } from './helper';

const CurrentCond = ({weatherObj}) => {
  const time = moment.unix(currentWeather(weatherObj).currentTime).format('h:mm a');
  const date = moment.unix(currentWeather(weatherObj).currentTime).format('MMMM Do');
  const summary = currentWeather(weatherObj).summary.toLowerCase();

  return (
    <section className='current-container'>
      <h2>Howdy! It's {time} on {date} and your local weather is {summary}</h2>
    </section>
  )
}

export default CurrentCond;
