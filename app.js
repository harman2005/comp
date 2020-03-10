const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
function x(){
console.log('hi');
}
	setInterval(x,2000);
  res.send('Hello World')
})
 
app.listen(3000)

