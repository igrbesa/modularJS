var stats = (function(){

	var people = 0;

	//cache dom
	var template = $('#statsModule').html();
	var $stat = $('#statsModule');

	_render();

	function _render() {
		$stat.html(Mustache.render(template, {nrPeoples: people}));
	}

	function setPeople(value){
		people = value;
		_render();
	}

	return{
		setPeople: setPeople
	}

})()