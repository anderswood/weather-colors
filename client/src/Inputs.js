import React, { Component } from 'react';

import { fetchCoords } from './helpers/helper';

export default class Inputs extends Component {
  constructor () {
    super()
    this.state = {
      location: '',
    }
  }

  handleWeather () {
    fetchCoords(this.state.location)
    .then(jsonGeoData => jsonGeoData.json())
    .then(geoData => {
      const coords = geoData.results[0].geometry.location;
      console.log(geoData.results);
      this.props.updateWeather(coords.lat, coords.lng);
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

      </section>
    )
  }

}
