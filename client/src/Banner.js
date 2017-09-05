import React from 'react';

import { WindVane } from './helpers/WindVane';

const Banner = ({themeColor}) => {
  return (
    <div className='Banner-container'>
      <h1 className='Banner-title'><span className='Banner-c'>C</span>OLOR</h1>
      <label className='Banner-svg'>
        <WindVane vaneStyle={ themeColor } />
      </label>
      <h1 className='Banner-title'><span className='Banner-v'>V</span>ANE</h1>
    </div>
  )
}

export default Banner;
