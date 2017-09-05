import React from 'react';

export const WindVane = ({ vaneStyle }) => {
  const svgStyle = { fill: `rgb(${vaneStyle})` }

  return (
    <svg style={ svgStyle } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="M83.936,65.895c-0.013-0.061-0.035-0.115-0.052-0.174 c-0.02-0.066-0.035-0.135-0.062-0.199c-0.029-0.068-0.068-0.131-0.104-0.195c-0.027-0.051-0.049-0.102-0.08-0.148   c-0.074-0.111-0.158-0.215-0.251-0.307l-5.999-6c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l2.586,2.586H54.293   c-0.523-2.205-2.17-3.979-4.304-4.676v-1.346C64.157,57.602,75.48,45.87,75.48,31.541c0-6.529-2.38-12.819-6.702-17.71 c-0.531-0.601-1.368-0.824-2.127-0.575c-0.76,0.252-1.297,0.932-1.365,1.729c-0.729,8.518-8.001,15.189-16.557,15.188 c-0.775,0-1.561-0.055-2.334-0.163c-2.007-0.281-3.457-1.958-3.446-3.985c0.006-1.189-0.026-2.419-0.056-3.533   c-0.022-0.823-0.043-1.581-0.043-2.205c0-0.337-0.02-0.671-0.051-1h2.05c2.757,0,5-2.243,5-5s-2.243-5-5-5h-0.797   c0.303-1.987-0.62-4.043-2.441-5.093c-1.596-0.923-3.285-0.95-4.701-0.157c-0.88-1.151-2.22-1.821-3.852-1.821   c-2.757,0-5,2.243-5,5v3.498c-2.94,1.324-5.16,3.959-5.917,7.159l-2.933-2.137c-0.895-0.651-2.144-0.454-2.794,0.438 s-0.454,2.144,0.438,2.794l2.983,2.174l-3.006,2.467c-0.854,0.7-0.979,1.961-0.277,2.814c0.396,0.482,0.969,0.731,1.547,0.731   c0.446,0,0.896-0.148,1.268-0.454l2.482-2.037v3.503c0,0.577,0.03,1.155,0.061,1.741c0.029,0.533,0.059,1.075,0.059,1.634   c0,13.829,10.547,25.243,24.02,26.618v1.439c-2.147,0.691-3.807,2.473-4.333,4.688H30.629l-2.722-4.715   c-0.554-0.957-1.774-1.285-2.732-0.732c-0.956,0.553-1.284,1.775-0.732,2.732l1.567,2.715h-1.881l-2.722-4.715 c-0.554-0.957-1.774-1.285-2.732-0.732c-0.956,0.553-1.284,1.775-0.732,2.732l1.567,2.715h-0.536c-1.104,0-2,0.896-2,2   c0,1.105,0.896,2,2,2h0.412l-1.443,2.5c-0.552,0.957-0.224,2.18,0.732,2.732c0.315,0.182,0.659,0.268,0.998,0.268   c0.691,0,1.364-0.357,1.734-1l2.598-4.5h1.881l-1.443,2.5c-0.552,0.957-0.224,2.18,0.732,2.732   c0.315,0.182,0.659,0.268,0.998,0.268c0.691,0,1.364-0.357,1.734-1l2.598-4.5h11.471c0.729,1.744,2.198,3.104,4.013,3.688v23.813   c0,1.105,0.896,2,2,2s2-0.895,2-2V71.963c1.801-0.59,3.258-1.941,3.984-3.678h23.674l-3.086,3.086   c-0.781,0.781-0.781,2.047,0,2.828c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586l6-6   c0.455-0.453,0.637-1.072,0.563-1.664C83.978,66.322,83.978,66.105,83.936,65.895z M32.058,7.214c0-0.542,0.458-1,1-1   c0.35,0,1,0,1,1.596c0,0.905,0.608,1.697,1.482,1.932s1.797-0.147,2.249-0.932c0.573-0.992,1.054-1.344,1.292-1.344 c0.129,0,0.318,0.067,0.53,0.19c0.446,0.257,0.625,0.843,0.4,1.302c-0.462,0.937-0.407,2.025,0.149,2.919   c0.553,0.882,1.505,1.408,2.545,1.408h2.143c0.542,0,1,0.458,1,1.001c0,0.542-0.458,0.999-1,0.999h-3.268   c-1.78-3.273-5.25-5.5-9.231-5.5c-0.099,0-0.194,0.013-0.292,0.015V7.214z M25.969,31.541c0-0.631-0.031-1.243-0.063-1.846   c-0.027-0.516-0.056-1.022-0.056-1.529v-7.88c0-3.584,2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5c0,0.654,0.021,1.448,0.044,2.312 c0.028,1.074,0.061,2.259,0.055,3.405c-0.021,4.055,2.877,7.405,6.892,7.968c0.956,0.134,1.929,0.202,2.889,0.202   c0.001,0,0.001,0,0.002,0c9,0,16.855-5.951,19.587-14.204c2.059,3.481,3.162,7.471,3.162,11.572   c0,12.548-10.208,22.756-22.755,22.756C36.177,54.297,25.969,44.088,25.969,31.541z M47.974,68.285c-1.379,0-2.5-1.121-2.5-2.5   s1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5S49.353,68.285,47.974,68.285z">
      </path>
      <path d="M32.022,18.703c-1.112,0-2.021,0.907-2.021,2.02c0,1.113,0.908,2.021,2.021,2.021   s2.021-0.907,2.021-2.021C34.042,19.61,33.134,18.703,32.022,18.703z">
      </path>
    </svg>
  )
}
