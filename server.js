const express = require('express');
const app = express();
const api = require('./api');

const myLogger = (req, res, next) => {
  const log = {
    date: new Date(),
    url: req.url
  };
  console.log(JSON.stringify(log, null, 2));
  next();
};
app.use(myLogger);

//Se utiliza para Parametros adicionales
app.get('/add', api.querySum);
app.get('/substract', api.querySubstract);
app.get('/multiply', api.queryMultiply);
app.get('/divide', api.queryDivide);

//Se utiliza para Identificadores
app.get('/add/:value1/:value2', api.paramSum);
app.get('/substract/:value1/:value2', api.paramSubstract);
app.get('/multiply/:value1/:value2', api.paramMultiply);
app.get('/divide/:value1/:value2', api.paramDivide);

//SERVER
const port = 3000;
const url = `http://localhost:${port}/`;
app.listen(port, () => console.log(`Listening on port ${url}`));
