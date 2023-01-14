/**
 * @jest-environment jsdom
 */

import commentsCounter from './commentCounter.js';

describe('no comments', () => {
  test('count comments', () => {
    const arr = [];
    expect(commentsCounter(arr)).toBe(0);
  });
});

describe('number of comments', () => {
  const p = document.createElement('p');
  test('display number of comments', () => {
    const comment = [
      {
        creation_date: '2022-1-14',
        username: 'Kidanu',
        comment: 'lovely meal',
      },
      {
        creation_date: '2022-1-14',
        comment: 'delecious meal',
        username: 'Naol',
      },
    ];
    expect(commentsCounter(comment, p)).toBe(2);
  });
});
