import calculate from '../logic/calculate';

describe('User interactions with calculator from scratch', () => {
  let prevState = { total: null, next: null, operation: null };
  test('Sum', () => {
    prevState = calculate(prevState, '9');
    prevState = calculate(prevState, '+');
    prevState = calculate(prevState, '3');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '12', next: null, operation: null });
  });

  test('Subtract and subtract', () => {
    prevState = calculate(prevState, '12');
    prevState = calculate(prevState, '-');
    prevState = calculate(prevState, '3');
    prevState = calculate(prevState, '=');
    prevState = calculate(prevState, '-');
    prevState = calculate(prevState, '2');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '7', next: null, operation: null });
  });

  test('Multiply', () => {
    prevState = calculate(prevState, '2');
    prevState = calculate(prevState, '*');
    prevState = calculate(prevState, '5');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '10', next: null, operation: null });
  });

  test('Divide', () => {
    prevState = calculate(prevState, '12');
    prevState = calculate(prevState, '÷');
    prevState = calculate(prevState, '6');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '2', next: null, operation: null });
  });

  test('Remainder', () => {
    prevState = calculate(prevState, '7');
    prevState = calculate(prevState, '%');
    prevState = calculate(prevState, '3');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '1', next: null, operation: null });
  });

  test('Divide by zero', () => {
    prevState = calculate(prevState, '12');
    prevState = calculate(prevState, '÷');
    prevState = calculate(prevState, '0');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: "Can't divide by 0.", next: null, operation: null });
  });

  test('Remainder by zero', () => {
    prevState = calculate(prevState, '12');
    prevState = calculate(prevState, '%');
    prevState = calculate(prevState, '0');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: "Can't find modulo as can't divide by 0.", next: null, operation: null });
  });

  test('Reset', () => {
    prevState = calculate(prevState, '12');
    prevState = calculate(prevState, 'AC');
    expect(prevState).toMatchObject({ total: null, next: null, operation: null });
  });
});

describe('User interactions with calculator on existing object', () => {
  test('Existing total', () => {
    let prevState = { total: 10, next: null, operation: null };
    prevState = calculate(prevState, '+');
    prevState = calculate(prevState, '3');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '13', next: null, operation: null });
  });

  test('Existing total and next', () => {
    let prevState = { total: 10, next: 3, operation: null };
    prevState = calculate(prevState, '-');
    prevState = calculate(prevState, '3');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '0', next: null, operation: null });
  });

  test('Override operation with exitsting total', () => {
    let prevState = { total: 10, next: null, operation: '+' };
    prevState = calculate(prevState, '*');
    prevState = calculate(prevState, '5');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '50', next: null, operation: null });
  });

  test('Override operation', () => {
    let prevState = { total: null, next: null, operation: '-' };
    prevState = calculate(prevState, '÷');
    prevState = calculate(prevState, '2');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '0', next: null, operation: null });
  });

  test('Remainder with existing next', () => {
    let prevState = { total: 0, next: 10, operation: null };
    prevState = calculate(prevState, '%');
    prevState = calculate(prevState, '7');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: '3', next: null, operation: null });
  });

  test('Divide by zero with existing total', () => {
    let prevState = { total: 10, next: null, operation: null };
    prevState = calculate(prevState, '÷');
    prevState = calculate(prevState, '0');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: "Can't divide by 0.", next: null, operation: null });
  });

  test('Remainder by zero with existing total', () => {
    let prevState = { total: 10, next: null, operation: null };
    prevState = calculate(prevState, '%');
    prevState = calculate(prevState, '0');
    prevState = calculate(prevState, '=');
    expect(prevState).toMatchObject({ total: "Can't find modulo as can't divide by 0.", next: null, operation: null });
  });

  test('Reset total', () => {
    let prevState = { total: 10, next: null, operation: null };
    prevState = calculate(prevState, '+');
    prevState = calculate(prevState, 'AC');
    expect(prevState).toMatchObject({ total: null, next: null, operation: null });
  });
});
