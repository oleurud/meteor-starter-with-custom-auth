notify = function(type, message){
	Session.set('notify', {
		type: type,
		message: message
	});
/*
	setTimeout(function(){ 
		Session.set('notify', false);
	}, 10000);
*/
};


Template.notify.rendered = function() {
	Session.set('notify', false);
};

Template.notify.helpers({
	notify: function(){
		return Session.get('notify');
	}
});