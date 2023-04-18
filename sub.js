const prompt=require('prompt-sync')();
class fraction {
  constructor(numerator, denominator)
  {
    this.numerator = numerator;
    this.denominator= denominator;
  }
  subtract(fraction)
  {
    const resultNumerator = (this.numerator * fraction.denominator) - (this.denominator * fraction.numerator);
    const resultDenominator = this.denominator * fraction.denominator;
    return new fraction(resultNumerator,resultDenominator);
  }
  simplify()
  {
    const gcd = this.getGCD();
    let numerator = math.abs(this.numerator);
    let denominator = Math.abs(this.denominator);
    while (denominator) {
      let temp = denominator;
      denominator = numerator % denominator;
      numerator = temp;
    }
    return numerator;
  }
  tostring()
  {
    return `${this.numerator}/${this.denominator}`;
  }
}
const fraction1= new Fraction(3,4);
const fraction2=new fraction(1,4);
    const result = fraction1.subtract(fraction2);
result.simplify();
console.log(result.toString());
