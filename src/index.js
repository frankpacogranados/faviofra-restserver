const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 8083);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/employees'));
/*
app.get('/', (req, res) => {
  res.send('Hola Mundo');

  })
*/
// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
  app.sen
});
