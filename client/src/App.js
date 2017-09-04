import React, { Component } from 'react';
import Favicon from 'react-favicon';
import './styles/App.css';

import Inputs from './Inputs';
import CurrentCond from './CurrentCond';
import Forecast from './Forecast';
import { fetchWeather } from './helpers/helper';
import { conditions } from './helpers/conditionsObj';
import { key } from './helpers/key';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      isLoading: true,
      weather: {},
      appStyle: { background: 'url(http://i.imgur.com/7f2Mwmj.png)' },
      headerStyle: { background: 'rgba(0, 0, 0, 0.6)' }
    }
  }

  componentDidMount () {
    this.updateWeather(40.016457, -105.285884)
  }

  updateWeather (lat, long) {
    this.setState({isLoading: true});
    fetchWeather(key, lat, long)
    .then(weather => {
      const currentDesc = weather.currently.icon
      const picURL = conditions[currentDesc].backgroundURL;
      const rGBValues = conditions[currentDesc].color;
      const appStyle = {
        background: `url(${picURL})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      };
      const headerStyle = { background: `rgba(${rGBValues}, 0.6)` };

      this.setState({
        isLoading: false,
        weather: weather,
        appStyle: appStyle,
        headerStyle: headerStyle
      });
    })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <section className="App-container" style={ this.state.appStyle } >
          <Favicon url={['https://maxcdn.icons8.com/windows10/PNG/512/Holidays/snowflake-512.png']}/>
          <h1 className='App-loading'>LOADING</h1>
        </section>
      )
    } else {
      return (
        <section className="App-container" style={ this.state.appStyle } >
          <Favicon url={['https://maxcdn.icons8.com/windows10/PNG/512/Holidays/snowflake-512.png']}/>
          <div className='header-container' style={ this.state.headerStyle }>
            <Inputs updateWeather={ this.updateWeather.bind(this) } />
            <CurrentCond weatherObj={ this.state.weather } />
          </div>
          <Forecast weatherObj={ this.state.weather } />
        </section>
      );
    }
  }

}

export default App;
