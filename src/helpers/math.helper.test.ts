import { test, expect, describe } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
  test('should add two positives numbers', () => {
    //! 1. Arrange
    const a = 1;
    const b = 3;
    //! 2. Act
    const result = add(a, b);
    //! 3. Assert
    expect(result).toBe(a + b);
  });

  test('should add two negative numbers', () => {
    //! 1. Arrange
    const a = -1;
    const b = -3;
    //! 2. Act
    const result = add(a, b);
    //! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('should subtarct two positives numbers', () => {
    //! 1. Arrange
    const a = 3;
    const b = 1;
    //! 2. Act
    const result = subtract(a, b);
    //! 3. Assert
    expect(result).toBe(a - b);
  });
  test('should subtarct two negative numbers', () => {
    //! 1. Arrange
    const a = -3;
    const b = -1;
    //! 2. Act
    const result = subtract(a, b);
    //! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('should multiply two positives numbers', () => {
    //! 1. Arrange
    const a = 3;
    const b = 1;
    //! 2. Act
    const result = multiply(a, b);
    //! 3. Assert
    expect(result).toBe(a * b);
  });
  test('should multiply two negative numbers', () => {
    //! 1. Arrange
    const a = -3;
    const b = -1;
    //! 2. Act
    const result = multiply(a, b);
    //! 3. Assert
    expect(result).toBe(a * b);
  });
});

describe('divide', () => {
  test('should multiply two positives numbers', () => {
    //! 1. Arrange
    const a = 4;
    const b = 2;
    //! 2. Act
    const result = divide(a, b);
    //! 3. Assert
    expect(result).toBe(a / b);
  });
  test('should divide two negative numbers', () => {
    //! 1. Arrange
    const a = -4;
    const b = -2;
    //! 2. Act
    const result = divide(a, b);
    //! 3. Assert
    expect(result).toBe(a / b);
  });
});
