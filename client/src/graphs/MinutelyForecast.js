import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const MinutelyForecast = ({ forecastStyle, minuteData }) => {

  return (
    <div className='forecast forecast-minutely' style={ forecastStyle }>
      <VictoryChart
        // theme={ VictoryTheme.material }
        // style={ chartStyle }
          animate={{ duration: 500 }}>
        <VictoryAxis
          // tickValues={dayData.xTickFormat}
          // tickFormat={hourData.xTickFormat}
        />
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
