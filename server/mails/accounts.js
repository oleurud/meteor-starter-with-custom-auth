Accounts.emailTemplates.siteName = "Meteor TestApp";
Accounts.emailTemplates.from = "Name <your@email.eu>";

Accounts.emailTemplates.verifyEmail.subject = function (user) {
	return 'Confirm Your Email Address, ' + user.username;
};

Accounts.emailTemplates.verifyEmail.text = function (user, url) {
	return "Welcome to the Meteor TestApp!\n"
			+ "To verify your email address go ahead and follow the link below:\n\n"
			+ url;
};

Accounts.emailTemplates.verifyEmail.html = function (user, url) {
	return "<h1>Welcome to the Meteor TestApp!</h1>"
			+ "<p>To <strong>verify your email address<strong> go ahead and follow the link below:</p>"
			+ url;
};



Meteor.methods({
	'sendWelcomeEmail': function(){
		if(this.userId){
			Email.send({
				from: 'Meteor App <your@email>',
				to: Meteor.user().emails[0].address,
				subject: 'Email',
				html: 	"<h1>Your email addres has been verified at the Meteor TestApp!</h1>"
						+ "<p>Thanks and welcome!!</p>"
			});
		}
	}
});