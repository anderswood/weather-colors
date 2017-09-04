import React, { Component } from 'react';

import { fetchCoords } from './helpers/helper';

export default class Inputs extends Component {
  constructor () {
    super()
    this.state = {
      location: '',
      validInput: true
    }
  }

  handleWeather () {
    fetchCoords(this.state.location)
    .then(jsonGeoData => jsonGeoData.json())
    .then(geoData => {
      if (geoData.status === 'ZERO_RESULTS') {
        this.props.updateWeather('', '', '', '', false)
      } else {
        const coords = geoData.results[0].geometry.location;
        const town = geoData.results[0].address_components[0].long_name;
        const state = geoData.results[0].address_components[2].short_name;

        this.props.updateWeather(coords.lat, coords.lng, town, state, true);
      }
    })
  }

  render () {
    return (
      <section className='inputs-container'>

        <label className='location-label'>
          <input  className='location-input'
                  placeholder='address or location, e.g. Boulder, CO'
                  value={ this.state.location }
                  onChange={ e => this.setState({location: e.target.value}) }/>
          <button onClick={() => this.handleWeather() }>GO!</button>
        </label>

        <div></div>

      </section>
    )
  }

}
