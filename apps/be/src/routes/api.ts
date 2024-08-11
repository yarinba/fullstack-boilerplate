import { Router } from 'express';

const api = Router();

api.get('/', (req, res) => {
  res.send({ message: 'Welcome to be!' });
});

api.post('/', (req, res) => {
  res.send({ message: `Welcome ${req.body.name}` });
});

export default api;
