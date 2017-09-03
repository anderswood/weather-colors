import React from 'react';
import moment from 'moment';

import { currentWeather } from './scrubber';
// import { weatherData } from './stubbed';

const CurrentCond = ({weatherObj}) => {
  return (
    <section className='current-container'>
      <h2>Howdy! It's {moment.unix(currentWeather(weatherObj).currentTime).format('h:mm a')} on {moment.unix(currentWeather(weatherObj).currentTime).format('MMMM Do')} and your local weather is {currentWeather(weatherObj).summary.toLowerCase()}</h2>
    </section>
  )
}

export default CurrentCond;
