const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser());

app.get('/buildPage/restaurants/:id/', (req, res) => {
  // axios.get(`http://localhost:3002/restaurants/${req.params.id}/`)
  //   .then(response => {
  //     res.send(response.data);
  //   })
  //   .catch(err => {
  //     throw err;
  //   });
  axios.get(`http://localhost:3002/api/reservations/bundle/`)
    .then(response => {
      console.log(response);
      res.send(response.data);
    })
    .catch(err => {
      throw err;
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});