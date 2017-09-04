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
      headerStyle: { background: 'rgba(0, 0, 0, 0.6)' },
      town: '',
      state: '',
      locationValid: true
    }
  }

  componentDidMount () {
    this.updateWeather(40.016457, -105.285884, 'Boulder', 'CO', true)
  }

  updateWeather (lat, long, town, state, locationValid) {
    this.setState({isLoading: true, locationValid: locationValid});

    if (!locationValid) {
      return this.setState({isLoading: false, locationValid: locationValid});
    }

    fetchWeather(key, lat, long)
    .then(weather => {
      const currentDesc = weather.currently.icon
      const rGBValues = conditions[currentDesc].color;
      const picURL = conditions[currentDesc].backgroundURL;
      const headerStyle = { background: `rgba(${rGBValues}, 0.6)` };
      const appStyle = {
        background: `url(${picURL})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      };

      this.setState({
        isLoading: false,
        weather: weather,
        appStyle: appStyle,
        headerStyle: headerStyle,
        town: town,
        state: state
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
            <CurrentCond  weatherObj={ this.state.weather }
                          town={ this.state.town }
                          state={ this.state.state }
                          locationValid={ this.state.locationValid }/>
          </div>
          <Forecast weatherObj={ this.state.weather } />
        </section>
      );
    }
  }

}

export default App;
