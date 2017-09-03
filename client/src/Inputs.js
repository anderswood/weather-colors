import React, { Component } from 'react';

// import { key } from './key';

export default class Inputs extends Component {
  constructor () {
    super()
    this.state = {
      lat: 40.016457,
      long: -105.285884
    }
  }

  handleWeather () {
    this.props.updateWeather(this.state.lat, this.state.long)
  }

  render () {
    return (
      <section className='inputs-container'>

        <h3>Location:</h3>
        <label className='latitude-label'>
          <input  className='latitude-input'
                  placeholder='latitude'
                  value={ this.state.lat }
                  onChange={ e => this.setState({lat: e.target.value}) }/>
        </label>

        <label className='longitude-label'>
          <input  className='longitude-input'
                  placeholder='longitude'
                  value={ this.state.long }
                  onChange={ e => this.setState({long: e.target.value}) }/>
        </label>
        <button onClick={() => this.handleWeather() }>CLICK</button>

      </section>
    )
  }

}
