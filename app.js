// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const questionsRoute = require('./routes/questions');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/questions', questionsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});