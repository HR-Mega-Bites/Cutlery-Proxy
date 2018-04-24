const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use('/recipes/:id', express.static('./public'));

app.listen(3001, ()=>console.log('listening on 3001...'));