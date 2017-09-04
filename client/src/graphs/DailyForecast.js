import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const DailyForecast = ({ forecastStyle, dayData }) => {

  const xTickStyle = {
    tickLabels: {
      angle: -90,
      textAnchor: 'end',
      verticalAnchor: 'middle',
    },
  }

  const yTickStyle = {
    axisLabel: {
      padding: 50,
      textAnchor:'beginning'
    }
  }

  console.log(dayData);

  return (
    <div className='forecast forecast-daily' style={ forecastStyle }>
      <VictoryChart domainPadding={{x: [15, 10]}}
                    title={'HELLOOOOO'}
                    padding={{top: 50, right: 20, bottom: 85, left: 80}}
                    animate={{ duration: 500 }}>
        <VictoryAxis  style={ xTickStyle }
                      tickCount={ 10 }
                      tickFormat={dayData.xTickFormat}
                      padding={50}
          // tickValues={dayData.xTickFormat}
          // tickFormat={hourData.xTickFormat}
        />
        <VictoryAxis  dependentAxis
                      style={ yTickStyle }
                      label='Max Temperature'
                      tickFormat={(y) => (`${y}°F`)} />
        <VictoryBar data={ dayData.data }
                    x='time'
                    y='temperatureHigh'/>
      </VictoryChart>
    </div>
  )
}

export default DailyForecast;
