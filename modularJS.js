var people = (function(){

		var peoples = [];

		//cache dom elements
		var $input = $('#inputPeopleName');
		var $button = $('#addPersonBtn');
		var $listPeoples = $('#listpeoples');
		var template = $('#people-template').html();

		//bind events
		$button.on('click', addPerson);
		$listPeoples.delegate('button', 'click', deletePerson);

		_render();
		deleteHover();

		function _render() {
			var data = {peoples: peoples};
			$listPeoples.html(Mustache.render(template, data));
			stats.setPeople(peoples.length);

		}
		function addPerson(value){
			var name = (typeof value === "string") ? value : $input.val();
			peoples.push({name: name})
			_render();
			$input.val('');
		}
		function deletePerson(event){
			var i;
			if(typeof event === "number"){
				i = event;
			}else{
				var $remove = $(event.target).closest('a');
				var i = $listPeoples.find('a').index($remove);
			}
			peoples.splice(i, 1);
			_render();
		}
		function deleteHover(){
			$listPeoples.delegate('a', 'mouseenter',function(event) {
				$(event.target).find('button').removeClass('hide');
			});
			$listPeoples.delegate('a', 'mouseleave',function(event) {
				$(event.target).find('button').addClass('hide');
			});
		}

		return {
			addPerson: addPerson,
			deletePerson: deletePerson
		}

})();
