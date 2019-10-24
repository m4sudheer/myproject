//importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

//calling router js
const route = require('./routes/router');
/*
//connect to mogodb
//mongoose.connect('mongodb://localhost:27017/contacts')

mongoose.connection.on('connected', ()=>{

   console.log('connected to db'); 
})
const port = 3000;



//calling middle ware
app.use(cors());

//adding body-parser
app.use(bodyparser.json());

//satic files

app.use(express.static(path.join(__dirname, 'public')));



// calling router after /api
app.use('/api', route);

//testing server route
app.get('/',(req, res)=>{
 res.send('hello');
});


app.listen(port,()=>{

    console.log(`server started at ${port}`);
});
*/
var xsum = () => {
    var x = [1, 2, 3, 9]
    console.log(x)
    var x_total = 0;
    for (var i = 0; i < x.length; i++) {
      x_total = x_total + x[i];
    }
    return x_total;
  };
  
  var ysum = () => {
    var y = [1, 2, 4, 4]
    var y_total = 0;
  
    for (var j = 0; j < y.length; j++) {
      y_total = y_total + y[j];
    }
  
    return y_total;
  };
  
  var z = xsum;
  console.log(xsum);