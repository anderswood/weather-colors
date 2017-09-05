import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const HourlyForecast = ({ forecastStyle, hourData }) => {

  const tickStyle = {
    tickLabels: {
      angle: -90,
      textAnchor: 'end'
      // fontSize: 40
    },
    axisLabel: {
      // fontSize: 50,
      padding: 25
    }
  }

  // const MyLabel = () => {
  //
  // }

  // console.log(hourData);

  return (
    <div className='forecast forecast-hourly' style={ forecastStyle }>
      <VictoryChart animate={{ duration: 500 }}>
        <VictoryAxis style = { tickStyle }
          // tickLabelComponent={ <VictoryLabel angle={-90} textAnchor={'end'} verticalAnchor={'middle'} /> }
          // tickValues={hourData.xTickFormat}
          // tickCount={49}
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
