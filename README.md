# dwayne-after-update

### Why?

The plugin is used for watching for variables changing in a more
declarative way than Dwayne built-in `Block#watch`.

### Installation

```bash
$ npm install --save dwayne-after-update
```

### Usage

```js
import { Block } from 'dwayne';
import template from './index.html';
import afterUpdate from 'dwayne-after-update';

class MyBlock extends Block {
  static template = template;
  
  afterUpdate(prevArgs, prevLocals, prevGlobals) {
    // do something with the previous values and the current ones
  }
}

Block.block('MyBlock', MyBlock.wrap(
  afterUpdate({
    locals: true,
    args: ['a', 'b'],
    globals: ['user']
  })
));

// or if you need it in all blocks

Block.beforeRegisterBlock((Block) => {
  return Block.wrap(
    afterUpdate({
      args: true
    })
  );
});
```

### API

```js
afterUpdate({
  args,   // String[]|true|undefined
  locals, // String[]|true|undefined
  globals // String[]|true|undefined
});
```

The plugin only exports the `afterUpdate` wrapper function.

The function takes one option - an object with `local`, `args`
and `globals` properties. If `args` is not present or falsy,
no args are watched (therefore `prevArgs` equals to `undefined`),
if it equals to `true` all args are to be watched and if it's an
array of strings, those particular args are to be watched. The
same stands for `locals` and `globals`.

The function returns a wrapper that you can use in any block
you want:

```js
Block.block('MyBlock', MyBlock.wrap(
  afterUpdate({
    locals: true,
    args: ['a', 'b']
  })
));
```

### New block behaviour

Now if the wrapped block has `Block#afterUpdate` method (if it
has no such method, the wrapping is pointless) it's called each
time a variable, that is watched, has changed.

The method is always called with three arguments: `prevArgs`,
`prevLocals` and `prevGlobals` - no matter what has been provided
in the wrapper config. They contain previous values of the watched
variables.
