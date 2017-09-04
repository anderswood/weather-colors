import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const DailyForecast = ({ forecastStyle, dayData }) => {
  return (
    <div className='forecast forecast-daily' style={ forecastStyle }>
      <VictoryChart
        // theme={ VictoryTheme.material }
        // style={ chartStyle }
        animate={{ duration: 500 }}>
        <VictoryAxis
          // tickValues={dayData.xTickFormat}
          // tickFormat={hourData.xTickFormat}
        />
        <VictoryAxis  dependentAxis
          label='Temperature'
          tickFormat={(y) => (`${y}°F`)} />
          <VictoryBar data={ dayData.data }
            x='time'
            y='temperatureHigh'/>
          </VictoryChart>
        </div>
  )
}

export default DailyForecast;
