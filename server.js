const express = require('express');
const app = express();

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
app.get('/add', (req, res) => {
  const sum = Number(req.query.value1) + Number(req.query.value2);
  res.send(`${sum}`);
});
app.get('/substract', (req, res) => {
  const substract = Number(req.query.value1) - Number(req.query.value2);
  res.send(`${substract}`);
});
app.get('/multiply', (req, res) => {
  const multiply = Number(req.query.value1) * Number(req.query.value2);
  res.send(`${multiply}`);
});
app.get('/divide', (req, res) => {
  const divide = Number(req.query.value1) / Number(req.query.value2);
  res.send(`${divide}`);
});

//Se utiliza para Identificadores
app.get('/add/:value1/:value2', (req, res) => {
  const sum = Number(req.params.value1) + Number(req.params.value2);
  res.send(`${sum}`);
});
app.get('/substract/:value1/:value2', (req, res) => {
  const substract = Number(req.params.value1) - Number(req.params.value2);
  res.send(`${substract}`);
});
app.get('/multiply/:value1/:value2', (req, res) => {
  const multiply = Number(req.params.value1) * Number(req.params.value2);
  res.send(`${multiply}`);
});
app.get('/divide/:value1/:value2', (req, res) => {
  const divide = Number(req.params.value1) / Number(req.params.value2);
  res.send(`${divide}`);
});

app.listen(3000, () => console.log('Server is up and running'));
