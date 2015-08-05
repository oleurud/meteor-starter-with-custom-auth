AccountsUtils = function() {};

AccountsUtils.validateEmail = function(email) {
	if(!email)
		return false;

	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}

AccountsUtils.validateNewUser = function(user) {
	if(!user)
		return false;

	if(!user.username){
		Session.set('registerError', 'Write a username');
		return false;
	} else if (user.username.length < 3){
		Session.set('registerError', 'Username must be have 3 or more caracters');
		return false;
	}

	if(!user.email){
		Session.set('registerError', 'Write a email');
		return false;
	} else if (!AccountsUtils.validateEmail(user.email)){
		Session.set('registerError', 'Invalid email');
		return false;
	}
	
	if(!user.password){
		Session.set('registerError', 'Write a password');
		return false;
	} else if (user.password.length < 8){
		Session.set('registerError', 'Password must be have 8 or more caracters');
		return false;
	}

	return true;
}


AccountsUtils.validateUser = function(user) {
	if(!user)
		return false;

	if(!user.user){
		Session.set('loginError', 'Write a username or email');
		return false;
	}

	if(!user.password){
		Session.set('loginError', 'Write a password');
		return false;
	} else if (user.password.length < 8){
		Session.set('loginError', 'Password must be have 8 or more caracters');
		return false;
	}

	return true;
}