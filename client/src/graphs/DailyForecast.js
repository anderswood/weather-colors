import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const DailyForecast = ({ forecastStyle, dayData }) => {
  const xTickStyle = {
    tickLabels: {
      angle: -90,
      textAnchor: 'end'
    }
  }

  const yTickStyle = {
    axisLabel: {
      padding: 50,
      textAnchor:'beginning'
    }
  }

  return (
    <div className='forecast forecast-daily' style={ forecastStyle }>
      <VictoryChart domainPadding={{x: [20, 10]}}
                    padding={{top: 50, right: 20, bottom: 85, left: 80}}
                    animate={{ duration: 500 }}>
        <VictoryAxis  style={ xTickStyle }
                      padding={50}
                      tickFormat={dayData.xTickFormat} />
        <VictoryAxis  dependentAxis
                      style={ yTickStyle }
                      label='Max Temperature'
                      tickFormat={(y) => (`${y}°F`)} />
        <VictoryBar data={ dayData.data }
                    labels={(d) => `${Math.round(d.y)}°F`} />
      </VictoryChart>
    </div>
  )
}

export default DailyForecast;
