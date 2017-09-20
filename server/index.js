const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// app.get('/', (req, res) => {
//   res.send('hello world')
// })



// app.use(express.static(path.join(__dirname, '../public')));


app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => {
  console.log(`listening in on port: ${port}`);
})