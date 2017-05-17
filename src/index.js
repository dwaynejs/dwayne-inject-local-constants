import { Block } from 'dwayne';

const { hasOwnProperty } = {};

export function injectConstantsWrapper(locals) {
  return (Block) => {
    return class extends Block {
      afterConstruct() {
        for (const key in locals) {
          if (locals::hasOwnProperty(key)) {
            this[key] = locals[key];
          }
        }

        super.afterConstruct();
      }
    };
  };
}

export function injectConstantsExtendFn(locals) {
  return class extends Block {
    _afterConstruct() {
      for (const key in locals) {
        if (locals::hasOwnProperty(key)) {
          this[key] = locals[key];
        }
      }

      super._afterConstruct();
    }
  };
}
