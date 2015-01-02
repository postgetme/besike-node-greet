greet = require("greet")
describe "greet", ->
  it "should greet a person by name", ->
    expect("hello ml").to.eql greet("ml")
    return

  it "should greet a person flirtatiously if drunk", ->
    expect("hello ml, you look sexy today").to.eql greet("ml", true)
    return

  return