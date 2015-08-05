loginRequired =  function() {
	if (!Meteor.user()) {
		this.redirect('/');
	}
	this.next();
};


Router.onBeforeAction(loginRequired, {
	only: ['logged']
});



Router.configure({
	layoutTemplate: 'index'
});

Router.route('/', function () {
	this.render('Home');
});

Router.route('/about');

Router.route('/logged',{});

