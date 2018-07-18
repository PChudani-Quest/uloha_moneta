module.exports = class Calculator {
  constructor() {

  }

  calculate(req, res) {
    this.validateInput(req.body.number)
      .then((number) => {
        res.json({
          result: this.divideByEvenCount(this.deleteSevens(this.multiplyEightsAndNines(this.moveThrees(number))))
        })
      }, (error) => {
        res.json({
          error: error
        })
      })
  }

  validateInput(input) {
    return new Promise(function(resolve, reject) {
      if (!input) {
        reject("Input in the form {\"number\": 123} expected")
      }
      var number = Number.parseInt(input);
      if (!number) {
        reject("Positive integer expected")
      }
      if (number < 0) {
        reject("Integer is negative")
      }
      resolve(number)
    })
  }

  moveThrees(number) {
    var digits = this.splitDigits(number);

    for (var i = digits.length - 1; i > 0; i--) {
      if (digits[i-1] <= 3) {
        var temp = digits[i];
        digits[i] = digits[i - 1];
        digits[i - 1] = temp;
      }
    }
    return this.collect(digits);
  }

  multiplyEightsAndNines(number) {
    var digits = this.splitDigits(number);

    const multiplied = digits.map((digit) => {
      if (digit === 8 || digit === 9) {
        return digit * 2;
      }
      return digit;
    });

    return this.collect(multiplied);
  }

  deleteSevens(number) {
    var digits = this.splitDigits(number);

    const omited = digits.filter((digit) => digit != 7);

    return this.collect(omited);
  }

  countEven(number) {
    var digits = this.splitDigits(number);

    return digits.reduce((acc, curr) => {
      return acc + ((curr % 2) == 0 ? 1 : 0)
    }, 0)
  }

  divideByEvenCount(number) {
    return Math.floor(number / this.countEven(number))
  }

  collect(digits) {
    return new Number(digits.reduce((acc, curr) => {
      return acc + curr;
    }, ""));
  }

  splitDigits(number) {
    return number.toString().split('').map(Number);
  }
}
