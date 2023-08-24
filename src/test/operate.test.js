import operate from '../logic/operate';

describe('operate', () => {
  const numberOne = 10;
  let numberTwo = 5;

  describe('Unknown Operation', () => {
    const operation = '';
    test('throws an error for unknown operation', () => {
      expect(() => operate(numberOne, numberTwo, operation)).toThrow(`Unknown operation '${operation}'`);
    });
  });

  describe('Addition', () => {
    const operation = '+';
    test('adds 10 + 5 to equal 15', () => {
      expect(operate(numberOne, numberTwo, operation)).toEqual('15');
    });
    test('adds 5 + 10 to equal 15', () => {
      expect(operate(numberTwo, numberOne, operation)).toEqual('15');
    });
  });

  describe('Subtraction', () => {
    const operation = '-';
    test('subtracts 10 - 5 to equal 5', () => {
      expect(operate(numberOne, numberTwo, operation)).toEqual('5');
    });

    test('subtracts 5 - 10 to equal -5', () => {
      expect(operate(numberTwo, numberOne, operation)).toEqual('-5');
    });

    test('subtracts (-10) - 5 to equal -15', () => {
      expect(operate(`-${numberOne}`, numberTwo, operation)).toEqual('-15');
    });
    test('subtracts (-10) - (-5) to equal -5', () => {
      expect(operate(`-${numberOne}`, `-${numberTwo}`, operation)).toEqual('-5');
    });
    test('subtracts 10 - (-5) to equal 15', () => {
      expect(operate(numberOne, `-${numberTwo}`, operation)).toEqual('15');
    });
  });

  describe('multiplication', () => {
    const operation = 'x';
    test('multiply 10 x 5 to equal 50', () => {
      expect(operate(numberOne, numberTwo, operation)).toEqual('50');
    });
    test('multiply (-10) x (-5) to equal 50', () => {
      expect(operate(`-${numberOne}`, `-${numberTwo}`, operation)).toEqual('50');
    });
    test('multiply 5 x 10 to equal 50', () => {
      expect(operate(numberTwo, numberOne, operation)).toEqual('50');
    });
    test('multiply (-10) x 5 to equal -50', () => {
      expect(operate(`-${numberOne}`, numberTwo, operation)).toEqual('-50');
    });
    test('multiply 10 x (-5) to equal -50', () => {
      expect(operate(numberOne, `-${numberTwo}`, operation)).toEqual('-50');
    });
  });

  describe('division', () => {
    const operation = '÷';
    test('divide 10 ÷ 5 to equal 2', () => {
      expect(operate(numberOne, numberTwo, operation)).toEqual('2');
    });
    test('divide (-10) ÷ (-5) to equal 2', () => {
      expect(operate(`-${numberOne}`, `-${numberTwo}`, operation)).toEqual('2');
    });
    test('divide 5 ÷ 10 to equal 0.5', () => {
      expect(operate(numberTwo, numberOne, operation)).toEqual('0.5');
    });
    test('divide 5 ÷ (-10) to equal -0.5', () => {
      expect(operate(numberTwo, `-${numberOne}`, operation)).toEqual('-0.5');
    });
    test('divide (-10) ÷ 5 to equal -2', () => {
      expect(operate(`-${numberOne}`, numberTwo, operation)).toEqual('-2');
    });
    test('divide 10 ÷ (-5) to equal -2', () => {
      expect(operate(numberOne, `-${numberTwo}`, operation)).toEqual('-2');
    });
    test('returns error message when dividing by zero', () => {
      numberTwo = 0;
      expect(operate(numberOne, numberTwo, operation)).toEqual("Can't divide by 0.");
    });
  });
});