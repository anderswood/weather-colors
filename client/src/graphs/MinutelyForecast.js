import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const MinutelyForecast = ({ forecastStyle, minuteData }) => {

  return (
    <div className='forecast forecast-minutely' style={ forecastStyle }>
      <VictoryChart
          animate={{ duration: 500 }}>
        <VictoryAxis/>
        <VictoryAxis  dependentAxis
          domain={[0,1]}
          label='Precip Probability'
          tickFormat={(y) => (`${y * 100}%`)} />
        <VictoryBar data={ minuteData.data }
          x='time'
          y='precipProbability'/>
      </VictoryChart>
    </div>
  )
}

export default MinutelyForecast;
