import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import apiRoutes from './routes/api';

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: 'http://localhost:4200',
    methods: 'GET, POST, PUT, DELETE',
  })
);

app.use('/api', apiRoutes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
