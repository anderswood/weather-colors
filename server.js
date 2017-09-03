var fetch = require('node-fetch');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post('/api/weather', (req, res) => {
  const { key, lat, long } = req.body;

  fetch(`https://api.darksky.net/forecast/${key}/${lat},${long}`)
  .then(response => {
    if(response.status === 200) {
      return response.json();
    } else {
      res.json({error: 'error fetching weather'});
    }
  })
  .then(weather => res.send(weather))
  .catch(err => console.log(err))
});

app.listen(app.get('port'), () => {
  console.log(`server is running on http://localhost:${app.get('port')}/`);
})
