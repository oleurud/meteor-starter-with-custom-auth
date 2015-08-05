Template.Home.created = function() {
	if (Accounts._verifyEmailToken) {
		Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
			if (err != null) {
				notify('danger', 'Sorry this verification link has expired');
			} else {
				notify('success', 'Thank you! Your email address has been confirmed.');
				Meteor.call('sendWelcomeEmail');
			}
		});
	}
};