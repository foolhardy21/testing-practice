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
const getASCII = (str, position) => str.charCodeAt(position);

const shiftASCIIInLowerCase = (ascii, key) => (ascii + key) % 123;
const shiftASCIIInUpperCase = (ascii, key) => (ascii + key) % 91;

const getChar = (ascii) => String.fromCharCode(ascii);

const wrapCharacter = (initial, current) => initial + current;

const cipher = (str, key) => {
  const str2 = str.split('');
  for (let i = 0; i < str.length; i += 1) {
    let ascii = getASCII(str, i);
    if (((ascii >= 65) && (ascii <= 90)) || ((ascii >= 97) && (ascii <= 122))) {
      if (str[i] === str[i].toLowerCase()) {
        ascii = shiftASCIIInLowerCase(ascii, key);
        if (ascii < 97) {
          ascii = wrapCharacter(97, ascii);
        }
      } else if (str[i] === str[i].toUpperCase()) {
        ascii = shiftASCIIInUpperCase(ascii, key);
        if (ascii < 65) {
          ascii = wrapCharacter(65, ascii);
        }
      }
    }
    str2[i] = getChar(ascii);
  }

  return str2.join('');
};

const analyze = (arr) => {
  const sum = arr.reduce((total, current) => total + current);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};
export {
  capitalize,
  reverseString,
  calculator,
  cipher,
  analyze,
};
