const express = require('express');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware')

const app = express();

app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser());

app.use('/api/reservations/restaurantID=:restaurantID&date=:date', proxy({ target: 'http://54.183.92.72:3002', changeOrigin: true }));
app.use('/api/reservations/', proxy({ target: 'http://54.183.92.72:3002', changeOrigin: true }));
app.use('/api/restaurants/:id/reviews', proxy({ target: 'http://54.183.92.72:3004', changeOrigin: true }));

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});