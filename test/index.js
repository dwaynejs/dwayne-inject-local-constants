import { initApp } from 'dwayne-test-utils';
import { strictEqual } from 'assert';
import { Block } from 'dwayne';
import injectLocalConstants from '../src';

let a = {};
let b = {};
let remove;

const App = Block.wrap(
  injectLocalConstants({
    a,
    b
  })
);

describe('it should test injectLocalConstants wrapper', () => {
  before(remove = initApp(App));
  after(remove);

  it('should test injecting locals', () => {
    strictEqual($app.a, a);
    strictEqual($app.b, b);
  });
});
