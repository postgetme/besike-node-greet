var greet = function(name, drunk) {
	if(drunk) {
		return "hello " + name + ", you look sexy today";
	}
	else {
		return "hello " + name;
	}	
}

module.exports = greet;