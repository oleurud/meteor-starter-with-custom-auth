Accounts.onCreateUser(function (options, user) {
	if (options.profile) {
		user.profile = options.profile;
	} else {
		user.profile = {};
	}

	//send verify email
	if (options.email) {
		Meteor.setTimeout(function () {
			Accounts.sendVerificationEmail(user._id);
		}, 2 * 1000);
	}

	return user;
});


Meteor.methods({
	'sendWelcomeEmail': function(){
		console.log('sendWelcomeEmail');
	}
});