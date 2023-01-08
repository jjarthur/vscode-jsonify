import * as assert from 'assert';

import { createObjectFromString } from './toJSON';

const jsObjectString = `{
  a: 1,
  b: '2',
  c: [3, 4, 5],
  d: {
    e: 6,
    f: '2023-01-01T00:00:00Z',
  }
}`;

const jsObject = {
  a: 1,
  b: '2',
  c: [3, 4, 5],
  d: {
    e: 6,
    f: '2023-01-01T00:00:00Z',
  },
};

suite('jsonify', () => {
  suite('createObjectFromString', () => {
    test('should succesfully convert JS object to JSON', () => {
      assert.equal(createObjectFromString(jsObjectString), jsObject);
    });
  });
});
