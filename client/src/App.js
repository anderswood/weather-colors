import React, { Component } from 'react';
import Favicon from 'react-favicon';
import './App.css';

import Inputs from './Inputs';
import CurrentCond from './CurrentCond';
import Forecast from './Forecast';
import { fetchWeather } from './helper';
import { conditions } from './conditionsObj';
import { key } from './key';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      isLoading: true,
      weather: {},
      appStyle: { background: 'url(http://i.imgur.com/7f2Mwmj.png)' }
    }
  }

  componentDidMount () {
    this.updateWeather(40.016457, -105.285884)
  }

  updateWeather (lat, long) {
    this.setState({isLoading: true});
    fetchWeather(key, lat, long)
    .then(weather => {
      let picURL = conditions[weather.currently.icon].backgroundURL;
      let sectionStyle = { background: `url(${picURL})` };

      this.setState({
        isLoading: false,
        weather: weather,
        appStyle: sectionStyle
      });
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <section className="App-container" style={ this.state.appStyle } >
          <h1 className='App-loading'>LOADING</h1>
        </section>
      )
    } else {
      return (
        <section className="App-container" style={ this.state.appStyle } >
          <Favicon url={['https://maxcdn.icons8.com/windows10/PNG/512/Holidays/snowflake-512.png']}/>
          <Inputs updateWeather={ this.updateWeather.bind(this) } />
          <CurrentCond weatherObj={ this.state.weather } />
          <Forecast weatherObj={ this.state.weather } />
        </section>
      );
    }
  }

}

export default App;
