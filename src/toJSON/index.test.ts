import * as assert from 'assert';

import { createObjectFromString } from '.';

const jsObjectString = `{
  a: 1,
  b: '2',
  c: [3, 4, 5],
  d: {
    e: true,
    f: '2023-01-01T00:00:00Z',
  }
}`;

const jsObject = {
  a: 1,
  b: '2',
  c: [3, 4, 5],
  d: {
    e: true,
    f: '2023-01-01T00:00:00Z',
  },
};

suite('toJSON', () => {
  suite('createObjectFromString', () => {
    test('should succesfully convert JS object to JSON', () => {
      assert.equal(createObjectFromString(jsObjectString), jsObject);
    });
  });
});
