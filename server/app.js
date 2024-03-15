require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, './dist')));
app.use(express.static(path.join(__dirname, './public')));

const mainRouter = require('./routes/index.route');



app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());

app.use('/', mainRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server up on ${PORT} port`);
});



// require('dotenv').config();

// const express = require('express');

// const app = express();
// const path = require('path');
// app.use(express.static(path.join(__dirname, './dist')));
// app.use(express.static(path.join(__dirname, './public')));
// const config = require('./config/serverConfig');
// const indexRouter = require('./routes/index.route');

// config(app);
// app.use('/', indexRouter);
// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, './dist/index.html'));
// // });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server up on ${PORT} port`);
// });

