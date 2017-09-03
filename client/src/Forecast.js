import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

import { currentWeather, minutelyData, dailyData, hourlyData } from './helper';
import { conditions } from './conditionsObj';

const Forecast = ({weatherObj}) => {
    const currentDescription = currentWeather(weatherObj).icon;
    const rGBValues = conditions[currentDescription].color;
    const divStyle = { background: `rgb(${rGBValues})` };

    const minuteData = minutelyData(weatherObj);
    const hourData = hourlyData(weatherObj);
    const dayData = dailyData(weatherObj);


    console.log(minuteData);

    const chartStyle = {
      width: '250px',
      height: '250px'
    }

    return (
      <section className='forecast-container'>
        <div className='forecast-minutely' style={ divStyle }>
          <VictoryChart
            // theme={ VictoryTheme.material }
              style={ chartStyle }
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
        <div className='forecast-hourly' style={ divStyle }>
          <VictoryChart
                        // theme={ VictoryTheme.material }
                        style={ chartStyle }
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
        <div className='forecast-daily' style={ divStyle }>
          <VictoryChart
                        // theme={ VictoryTheme.material }
                        style={ chartStyle }
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
      </section>
    )
}

export default Forecast;
