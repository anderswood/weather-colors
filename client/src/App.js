import React, { Component } from 'react';
import Favicon from 'react-favicon';
import './App.css';

import Inputs from './Inputs';
import CurrentCond from './CurrentCond';
import Forecast from './Forecast';
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
    fetch('/api/weather', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        key: key,
        lat: 40.016457,
        long: -105.285884
      })
    })
    .then(jsonWeather => jsonWeather.json())
    .then(weather => {
      console.log(weather.currently.icon);
      let picURL = conditions[weather.currently.icon].backgroundURL;
      let sectionStyle = { background: `url(${picURL})` };

      this.setState({
        isLoading: false,
        weather: weather,
        appStyle: sectionStyle
      });
    })
  }

  updateWeather (lat, long) {
    fetch('/api/weather', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        key: key,
        lat: lat,
        long: long
      })
    })
    .then(jsonWeather => jsonWeather.json())
    .then(weather => {
      this.setState({weather: weather});
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <section className="App-container" style={ this.state.appStyle } >
          <h1>LOADING</h1>
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
