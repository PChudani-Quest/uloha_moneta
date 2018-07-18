module.exports = function(app) {
  const Calculator = require('../controllers/calculationController');
  const calculator = new Calculator();

  app.route('/calculate')
    .post(calculator.calculate.bind(calculator));
};
