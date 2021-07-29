/* eslint-disable no-undef */
import { capitalize, reverseString, calculator } from './assign';

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
test('CALCULATOR: div', () => {
  expect(calculator.div(1, 0)).toMatch('Invalid arguments');
});
