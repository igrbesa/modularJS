//classical inheritance

function inherit(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

var Person = function(name){
	this.name = name;
}

Person.prototype.sayName = function(){
	console.log(this.name);
}

Person.prototype.shoutName = function(){
	console.log(this.name + '!');
}

var john = new Person('john');
var ivan = new Person('ivan');

john.sayName();

var Musician = function(name, instument){
	//Person.call(this, name);
	Musician.super_.call(this, name);
	this.instument = instrument;
}

Musician.prototype.getInstument = function(){
	console.log(this.instument);
}

//override super
Musician.prototype.shoutName = function(){
	console.log(this.name + "!!!!!");
}

inherit(Musician, Person);

var julia = new Musician("julia", "trombon");