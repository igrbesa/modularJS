//
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
//

var myModule = {
	name:"ja",
	sayName: function(){
		alert(this.name);
	}
	setName: function(newName){
		this.name = newName;
	}
}

