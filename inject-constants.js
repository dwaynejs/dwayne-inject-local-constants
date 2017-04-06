const { hasOwnProperty } = {};

export default (locals) => {
  return (Block) => {
    return class extends Block {
      afterConstruct() {
        for (const key in locals) {
          if (hasOwnProperty.call(key)) {
            this[key] = locals[key];
          }
        }

        super.afterConstruct();
      }
    };
  };
};
