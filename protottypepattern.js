var human = {
	specias: "human",
	sayspecies: function(){
		console.log(this.species);
	},
	sayName: function(){
		console.log(this.name);
	}
}

var musician = Object.create(human);
musician.playInstument = function(){
	console.log("playing instrumnet: " + this.instrumnet);
}

var will = Object.create(musician);
will.name = "Will";
will.instrumnet = "Drums";