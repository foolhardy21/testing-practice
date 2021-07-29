const capitalize = (str) => {
  let first = str.split('')[0];
  first = first.toUpperCase();
  const newArr = str.split('').splice(1);
  newArr.unshift(first);
  return newArr.join('');
};

const reverseString = (str) => str.split('').reverse().join('');

const calculator = (() => {
  const validateArguments = (a, b, op) => {
    // eslint-disable-next-line valid-typeof
    if (typeof a !== 'number' && typeof b !== 'number') {
      return false;
    }
    if (op === 'div' && b === 0) {
      return false;
    }
    return true;
  };
  const add = (a, b) => {
    if (validateArguments(a, b, 'add')) {
      return a + b;
    }
    return 'Invalid arguments';
  };
  const sub = (a, b) => {
    if (validateArguments(a, b, 'sub')) {
      return a - b;
    }
    return 'Invalid arguments';
  };
  const mul = (a, b) => {
    if (validateArguments(a, b, 'mul')) {
      return a * b;
    }
    return 'Invalid arguments';
  };
  const div = (a, b) => {
    if (validateArguments(a, b, 'div')) {
      return a / b;
    }
    return 'Invalid arguments';
  };

  return {
    add,
    sub,
    mul,
    div,
  };
})();
export {
  capitalize,
  reverseString,
  calculator,
};
