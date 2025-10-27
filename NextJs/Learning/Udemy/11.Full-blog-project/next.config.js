const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "admin930730",
        mongodb_password: "admin930730",
        mongodb_cluster: "cluster0",
        mongodb_db: "dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "admin930730",
      mongodb_password: "admin930730",
      mongodb_cluster: "cluster0",
      mongodb_db: "test",
    },
  };
};
