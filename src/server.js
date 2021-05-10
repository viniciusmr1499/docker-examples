const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('.'));
app.get('/', (_, res) => {
  res.sendFile(__dirname, 'index.html');
})

app.listen(PORT, () => {
  console.log(`Server stated on port ${PORT}`)
})