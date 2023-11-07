const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: { myName: "Develope" },
    };
  }

  return {
    env: { myName: "Operation" },
    /* config options for all phases except development here */
  };
};
