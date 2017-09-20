const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.send('index.html')
})



// app.use(express.static(path.join(__dirname, '../public')));


app.use(express.static(path.join(__dirname, 'client/dist')));

app.listen(port, () => {
  console.log(`listening in on port: ${port}`);
})