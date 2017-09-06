import React, { Component } from 'react';
import Favicon from 'react-favicon';
import './styles/App.css';

import Banner from './Banner';
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
      locationValid: true,
      weather: {},
      appStyle: { background: 'url(http://i.imgur.com/7f2Mwmj.png)' },
      themeColor: '0, 0, 0',
      town: '',
      state: ''
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

    fetchWeather(lat, long)
    .then(weather => {
      const currentDesc = weather.currently.icon
      const rGBValues = conditions[currentDesc].color;
      const picURL = conditions[currentDesc].backgroundURL;
      const appStyle = {
        background: `url(${picURL})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      };

      this.setState({
        isLoading: false,
        weather: weather,
        appStyle: appStyle,
        themeColor: rGBValues,
        town: town,
        state: state
      });
    })
  }

  render() {
    const headerStyle = { background: `rgba(${this.state.themeColor}, 0.6)` }

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
          <Banner themeColor={ this.state.themeColor } />
          <div className='header-container' style={ headerStyle }>
            <Inputs updateWeather={ this.updateWeather.bind(this) }
                    themeColor={ this.state.themeColor }/>
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
