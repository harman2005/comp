const express = require('express')
const app = express()
const csv = require('csv-parser');
const fs = require('fs');

 
 
app.get('/', function (req, res) {

fs.createReadStream('Dataset.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

  res.send('Hello World')
})



 
app.listen(3000)

