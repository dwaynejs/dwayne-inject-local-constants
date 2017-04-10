const { hasOwnProperty } = {};

export default (locals) => {
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
};
