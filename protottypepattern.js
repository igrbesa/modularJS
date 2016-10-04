var human = {
	specias: "human",
	sayspecies: function(){
		console.log(this.species);
	},
	sayName: function(){
		console.log(this.name);
	},
	create: function(name){
		var instance = Object.create(this);
		instance.name = name;
		return instance;
	}
}

/* this is replaced with create function
var musician = Object.create(human);
musician.playInstument = function(){
	console.log("playing instrumnet: " + this.instrumnet);
}
*/
var will = Object.create(musician);
will.name = "Will";
will.instrumnet = "Drums";