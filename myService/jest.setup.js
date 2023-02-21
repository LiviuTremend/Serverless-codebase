const env = {
  ENVIRONMENT: 'test'
}

if (process.env.DEBUG) {
  console.log('Setting up test environment\n' + JSON.stringify(env, null, 2))
}
Object.keys(env).forEach((it) => {
  process.env[it] = env[it]
})

module.exports = {}