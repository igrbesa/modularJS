(function(){

	var people = {
		peoples: [],
		init: function(){
			this.cacheDom();
			this.bindEvents();
			this.deleteHover();
		},
		cacheDom: function(){
			this.$input = $('#inputPeopleName');
			this.$button = $('#addPersonBtn');
			this.$listPeoples = $('#listpeoples');
			this.template = $('#people-template').html();
		},
		bindEvents: function(){
			this.$button.on('click', this.addPerson.bind(this));
			this.$listPeoples.delegate('button', 'click', this.deletePerson.bind(this));
		},
		render: function(){
			var data = {peoples: this.peoples};
			this.$listPeoples.html(Mustache.render(this.template, data));
		},
		addPerson: function(){
			this.peoples.push({name: this.$input.val()})
			this.render();
			this.$input.val('');
		},
		deletePerson: function(event){
			var $remove = $(event.target).closest('a');
			var i = this.$listPeoples.find('a').index($remove);
			this.peoples.splice(i, 1);
			this.render();
		},
		deleteHover: function(){
			this.$listPeoples.delegate('a', 'mouseenter',function(event) {
				$(event.target).find('button').removeClass('hide');
			});
			this.$listPeoples.delegate('a', 'mouseleave',function(event) {
				$(event.target).find('button').addClass('hide');
			});
		}

	};

	people.init();

})();





//var peoples = [];
//var template = $('#people-template').html();
//
////adding new person
//$('#addPersonBtn').on('click', function(event) {
//	event.preventDefault();
//	/* Act on the event */
//	peoples.push({name: $('#inputPeopleName').val()});
//	$('#inputPeopleName').val('');
//	var data = {peoples: peoples};
//	$('#listpeoples').html(Mustache.render(template, data));
//});
//
//
//$('#listpeoples').delegate('button', 'click', function(event) {
//	var $remove = $(event.target).closest('a');
//	var i = $('#listpeoples').find('a').index($remove);
//
//	$remove.remove();
//	peoples.splice(i, 1);
//});
//
//$('#listpeoples').delegate('a', 'mouseenter', function(event) {
//	$(event.target).find('button').removeClass('hide');
//});
//
//$('#listpeoples').delegate('a', 'mouseleave', function(event) {
//	$(event.target).find('button').addClass('hide');
//});