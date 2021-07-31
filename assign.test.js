/* eslint-disable no-undef */
import {
  capitalize, reverseString, calculator, cipher, analyze,
} from './assign';

test('CAPITALIZE: lowercase string', () => {
  expect(capitalize('small')).toMatch('Small');
});
test('CAPITALIZE: uppercase string', () => {
  expect(capitalize('SMALL')).toMatch('SMALL');
});
test('CAPITALIZE: first character lowercase ', () => {
  expect(capitalize('sMALL')).toMatch('SMALL');
});
test('CAPITALIZE: case switched for every character', () => {
  expect(capitalize('sMaLl')).toMatch('SMaLl');
});

test('REVERSE STRING:', () => {
  expect(reverseString('google')).toMatch('elgoog');
});
test('REVERSE STRING: case matching', () => {
  expect(reverseString('GOOGLE')).toMatch('ELGOOG');
});

test('CALCULATOR: invalid args', () => {
  expect(calculator.add('1', '2')).toMatch('Invalid arguments');
});
test('CALCULATOR: add', () => {
  expect(calculator.add(1, 2)).toEqual(3);
});
test('CALCULATOR: sub', () => {
  expect(calculator.sub(1, 2)).toEqual(-1);
});
test('CALCULATOR: mul', () => {
  expect(calculator.mul(1, 0)).toEqual(0);
});
test('CALCULATOR: div', () => {
  expect(calculator.div(1, 2)).toEqual(0.5);
});
test('CALCULATOR: div by zero', () => {
  expect(calculator.div(1, 0)).toMatch('Invalid arguments');
});

test('CIPHER: key=0 without z', () => {
  expect(cipher('abc', 0)).toMatch('abc');
});
test('CIPHER: key=0 with z', () => {
  expect(cipher('abz', 0)).toMatch('abz');
});
test('CIPHER: key=0 case sensitive', () => {
  expect(cipher('aBz', 0)).toMatch('aBz');
});
test('CIPHER: key=2 case sensitive', () => {
  expect(cipher('aBz', 2)).toMatch('cDb');
});
test('CIPHER: key=3 case sensitive and punctuation', () => {
  expect(cipher('aBz.,', 3)).toMatch('dEc.,');
});

test('ARRAY ANALYSIS:', () => {
  expect(analyze([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
