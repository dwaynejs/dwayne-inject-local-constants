import { Block, initApp, doc } from 'dwayne';
import { strictEqual } from 'assert';
import injectLocalConstants from '../src';

let afterRender;
let currentApp;

let a = {};
let b = {};

class App extends Block {
  constructor(opts) {
    super(opts);

    currentApp = this;
  }

  afterRender() {
    afterRender();
  }
}

Block.block('App', App.wrap(
  injectLocalConstants({
    a,
    b
  })
));

describe('it should test injectLocalConstants wrapper', () => {
  before((done) => {
    let isDone = 0;

    afterRender = () => {
      doneAll();
    };

    initApp('App', doc.create('div'));

    setTimeout(doneAll, 0);

    function doneAll() {
      if (++isDone === 2) {
        done();
      }
    }
  });

  it('should test injecting locals', () => {
    strictEqual(currentApp.a, a);
    strictEqual(currentApp.b, b);
  });
});
