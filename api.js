//QUERIES
const querySum = (req, res) => {
  const sum = Number(req.query.value1) + Number(req.query.value2);
  res.send(`${sum}`);
};
const querySubstract = (req, res) => {
  const substract = Number(req.query.value1) - Number(req.query.value2);
  res.send(`${substract}`);
};
const queryMultiply = (req, res) => {
  const multiply = Number(req.query.value1) * Number(req.query.value2);
  res.send(`${multiply}`);
};
const queryDivide = (req, res) => {
  const divide = Number(req.query.value1) / Number(req.query.value2);
  res.send(`${divide}`);
};

//PARAMS
const paramSum = (req, res) => {
  const sum = Number(req.params.value1) + Number(req.params.value2);
  res.send(`${sum}`);
};
const paramSubstract = (req, res) => {
  const substract = Number(req.params.value1) - Number(req.params.value2);
  res.send(`${substract}`);
};
const paramMultiply = (req, res) => {
  const multiply = Number(req.params.value1) * Number(req.params.value2);
  res.send(`${multiply}`);
};
const paramDivide = (req, res) => {
  const divide = Number(req.params.value1) / Number(req.params.value2);
  res.send(`${divide}`);
};

module.exports = {
    querySum,
    querySubstract,
    queryMultiply,
    queryDivide,
    paramSum,
    paramSubstract,
    paramMultiply,
    paramDivide
}