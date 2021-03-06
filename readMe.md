# Overview
[Live Site](https://colorvane.herokuapp.com/)

Color Vane is a fully responsive weather app built in React.js that pulls weather data from the Dark Sky API. The app's color theme changes with the local weather: turning bright orange when it's sunny and dreary gray when it's foggy.

# Installation and Setup Instructions
* clone repo
* install npm packages by running `cd weather-colors && npm i && cd client && npm i && cd ..`
* start the server by running `npm start`
* hop on over to localhost:3000 and get your color themed weather on!

# Screenshots
Boulder Weather:
![Boulder Weather](https://i.imgur.com/dPtCIkA.png)

Kentucky Weather:
![Kentucky Weather:](https://i.imgur.com/qhqtsp7.png)

# Next Steps
* Improve error handling with location inputs, e.g. consistent output of 'town' and 'state'
* Add additional graphs (minutely and hourly data)
* Improve graph styling
* Make graphs interactive with hover and clicking

# Resources
* [react.js](https://facebook.github.io/react/): javascript framework used to build sectionStyle
* [react.js tutorial](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/): guide for implementing a React.js app with a server. This capability was important for this project to execute API calls to the Dark Sky API which disables cross origin resource sharing.
* [dark sky API](https://darksky.net/dev): weather API used to pull in the weather data
* [google geocoding API](https://developers.google.com/maps/documentation/geocoding/intro): converts addresses into geographic coordinates
* [moment](https://momentjs.com/): 'Parse, validate, manipulate, and display dates and times in JavaScript'
* [moment timezone](https://momentjs.com/timezone/): 'Parse and display dates in any timezone'
* [victory](https://formidable.com/open-source/victory/): 'React.js components for modular charting and data visualization'
* [react-favicon](https://www.npmjs.com/package/react-favicon): 'Control the favicon from a React app'
* [concurrently](https://www.npmjs.com/package/concurrently): employed to run the server and app in parallel with one `npm start` command

# Photo Credits
[clear-day](https://i.pinimg.com/originals/88/95/d9/8895d94c150ca3857380a58e0ab4014b.jpg) |
[clear-night](http://www.clear-night.com/img/clear-night-placeholder.jpg) |
[rain](http://az616578.vo.msecnd.net/files/2016/01/16/635885008368259096-1039022421_rainy_day_raining_cold_abstract_1600x1200_hd-wallpaper-1557994.jpg) |
[snow](http://cnsoup.com/snowing-wallpaper.html) |
[sleet](https://edenhills.files.wordpress.com/2014/02/dsc_0076ew.jpg) |
[wind](http://www.bsideblog.com/wp-content/uploads/2011/12/windy.jpg) |
[fog](https://img08.deviantart.net/e2e6/i/2009/069/c/3/foggy_forest_26_by_sd_stock.jpg) |
[cloudy](http://www.gazetteseries.co.uk/resources/images/5360796.jpg?display=1&htype=0&type=responsive-gallery) |
[partly-cloudy-day](https://static.pexels.com/photos/216596/pexels-photo-216596.jpeg) |
[partly-cloudy-night](http://wallpapers-hd-wide.com/wp-content/uploads/2016/01/Beautiful-cloudy-night-full-moon-moonlight-1920x1080.jpg)
