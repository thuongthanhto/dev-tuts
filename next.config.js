const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'thuongthanhto',
        mongodb_password: 'thuongkute',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'thuongthanhto',
      mongodb_password: 'thuongkute',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  }
}
