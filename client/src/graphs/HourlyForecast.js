import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const HourlyForecast = ({ forecastStyle, hourData }) => {
  return (
    <div className='forecast forecast-hourly' style={ forecastStyle }>
      <VictoryChart
        // theme={ VictoryTheme.material }
        // style={ chartStyle }
        animate={{ duration: 500 }}>
        <VictoryAxis
          // tickValues={hourData.xTickFormat}
          // tickFormat={hourData.xTickFormat}
        />
        <VictoryAxis  dependentAxis
          label='Max Temperature'
          tickFormat={(y) => (`${y}°F`)} />
          <VictoryBar data={ hourData.data }
            x='time'
            y='temperature'/>
          </VictoryChart>
        </div>
  )
}

export default HourlyForecast;
