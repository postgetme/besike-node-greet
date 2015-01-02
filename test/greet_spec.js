var greet = require("greet");

describe('greet', function(){
  it("should greet a person by name", function(){
  	expect("hello ml").to.eql(greet("ml"));
  });

  it("should greet a person flirtatiously if drunk", function(){
  	expect("hello ml, you look sexy today").to.eql(greet("ml", true));
  });
});