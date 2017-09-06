import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const HourlyForecast = ({ forecastStyle, hourData }) => {

  const tickStyle = {
    tickLabels: {
      angle: -90,
      textAnchor: 'end'
    },
    axisLabel: {
      padding: 25
    }
  }

  return (
    <div className='forecast forecast-hourly' style={ forecastStyle }>
      <VictoryChart animate={{ duration: 500 }}>
        <VictoryAxis style = { tickStyle }
          tickFormat={hourData.xTickFormat}
        />
        <VictoryAxis  dependentAxis
                      label='Temperature'
                      tickFormat={(y) => (`${y}°F`)} />
        <VictoryBar data={ hourData.data }
                    x='time'
                    y='temperature'/>
      </VictoryChart>
    </div>
  )
}

export default HourlyForecast;
