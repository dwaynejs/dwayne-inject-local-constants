import { initApp } from 'dwayne-test-utils';
import { strictEqual } from 'assert';
import { Block } from 'dwayne';
import { injectConstantsWrapper, injectConstantsExtendFn } from '../src';

let a = {};
let b = {};
let remove;

const App = Block.wrap(
  injectConstantsWrapper({
    a,
    b
  })
);

class NewBaseBlock extends Block {}

NewBaseBlock.extend(
  injectConstantsExtendFn({
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

describe('it should test injectLocalConstants extend function', () => {
  before(remove = initApp(class extends NewBaseBlock {}));
  after(remove);

  it('should test injecting locals', () => {
    strictEqual($app.a, a);
    strictEqual($app.b, b);
  });
});
