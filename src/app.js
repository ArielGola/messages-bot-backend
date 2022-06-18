const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/mba/user', require('./routes/user.routes'));
app.use('/mba/message', require('./routes/message.routes'));
app.use('/mba/history', require('./routes/history.routes'));


module.exports = app;