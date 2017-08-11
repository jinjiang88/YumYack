var controller = require('./../controllers/controller');

module.exports = app => {

	app.post('/api/login', controller.login);
    app.get('/api/getallusers', controller.getAllUsers);
    app.post('/api/register', controller.register);
    app.post('/api/createPost', controller.createPost);
    app.get('/api/getallposts', controller.getAllPosts);
    app.get('/api/getallfriends', controller.getAllFriends);
	// app.get('/api/grossest', controller.grossest);
	// app.get('/api/averagin', controller.averaging);
	app.get('/logout', controller.logout);
	app.get('/api/current', controller.current);
	app.get('/api/posts', controller.getAllPosts);

}

