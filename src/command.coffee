command = ->
  greet = require("greet")
  parseArgs = require("minimist")
  argv = parseArgs(process.argv.slice(2))
  name = argv._[0] or ""
  drunk = argv.drunk
  console.log greet(name, drunk)
  return

module.exports = command