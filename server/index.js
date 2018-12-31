const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser());

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});