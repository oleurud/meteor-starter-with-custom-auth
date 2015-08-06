Accounts.onLogin( function() {
	Router.go('/logged');
});


Template.registerPopup.rendered = function() {
	Session.set('registerError', false);
};

Template.registerPopup.events({
	'submit #register-form': function(event){
		event.preventDefault();

		var user = {
			username: $('#register-username').val(),
			email: $('#register-email').val(),
			password: $('#register-password').val()
		}

		if(AccountsUtils.validateNewUser(user)){
			Session.set('registerError', false);

			Accounts.createUser(user, function(err, user){
				if(err) {
					Session.set('registerError', err.reason)
				} else {
					$('#registerModal').modal('hide');
					notify('success', 'User created. Verification email send, please see your inbox and verify your email account');

					$('#register-username').val('');
					$('#register-email').val('');
					$('#register-password').val('');
				}
			});
		}
	}
});

Template.registerPopup.helpers({
	error: function(){
		return Session.get('registerError');
	}
});


Template.loginPopup.rendered = function() {
	Session.set('loginError', false);
};

Template.loginPopup.events({
	'submit #login-form': function(event){
		event.preventDefault();

		var user = {
			user: $('#login-user').val(),
			password: $('#login-password').val()
		}

		if(AccountsUtils.validateUser(user)){
			Session.set('loginError', false);

			Meteor.loginWithPassword(user.user, user.password, function(err, user){
				if(err) {
					Session.set('loginError', err.reason)
				} else {
					$('#loginModal').modal('hide');

					$('#login-user').val('');
					$('#login-password').val('');
				}
			});
		}
	}
});

Template.loginPopup.helpers({
	error: function(){
		return Session.get('loginError');
	}
});





Template.accountsButtons.events({
	'click #logout': function() {
		Meteor.logout();
	}
});