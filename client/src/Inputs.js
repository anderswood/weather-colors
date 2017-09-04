import React, { Component } from 'react';

import { geoKey } from './key';

export default class Inputs extends Component {
  constructor () {
    super()
    this.state = {
      location: '',
    }
  }

  handleWeather () {
    this.getCoordinates(this.state.location)
    .then(jsonGeoData => jsonGeoData.json())
    .then(geoData => {
      const coords = geoData.results[0].geometry.location;
      console.log(geoData.results);
      this.props.updateWeather(coords.lat, coords.lng);
    })
  }

  getCoordinates (address) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoKey}`)
  }

  render () {
    return (
      <section className='inputs-container'>

        <label className='location-label'>
          <h4>Latitude</h4>
          <input  className='location-input'
                  placeholder='address or location, e.g. Boulder, CO'
                  value={ this.state.location }
                  onChange={ e => this.setState({location: e.target.value}) }/>
        </label>

        <button onClick={() => this.handleWeather() }>GO!</button>

      </section>
    )
  }

}
