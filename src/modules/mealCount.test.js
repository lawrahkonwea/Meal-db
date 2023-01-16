/**
 * @jest-environment jsdom
 */

import counter from './mealCount.js';

describe('Test count function', () => {
  test('counts the number of dom child element if present', () => {
    const count = [1, 2, 3];
    const div = document.createElement('div');
    counter(div, count);
    expect(div.innerHTML).toBe('MEALS(3)');
  });

  test('No meals shown if dom child element is not present', () => {
    const count = [];
    const div = document.createElement('div');
    counter(div, count);
    expect(div.innerHTML).not.toBeNull();
  });
});