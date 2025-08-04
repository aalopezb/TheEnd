const express = require('express');
const client = require('prom-client');
const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
app.listen(3004, () => console.log('Metrics running on port 3004'));
