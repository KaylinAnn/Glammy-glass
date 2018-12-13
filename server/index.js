const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
  console.log('database is runnin');
}).catch(error => {
  console.log('-------------- database issue', error);
});



const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port PORT`));