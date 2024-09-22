const express = require('express');
const routes = require('./api/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Crypto Node.js app listening at http://localhost:${port}`);
});