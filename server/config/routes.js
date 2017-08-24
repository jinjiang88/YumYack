var controller = require('./../controllers/controller');

module.exports = app => {
	console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

	app.post('/api/yelpsearch', controller.yelpsearch);

	app.post('/api/login', controller.login);//3
    app.get('/api/getallusers', controller.getAllUsers);//1
    app.post('/api/register', controller.register);//4
    app.post('/api/createPost', controller.createPost);//5

    app.get('/api/getallposts', controller.getAllPosts);//2
    app.get('/api/getallfriends', controller.getAllFriends);//8
	app.get('/logout', controller.logout);//7


	app.get('/api/current', controller.current);//6
	app.get('/api/posts', controller.getPosts);//9
	app.post('/api/getuser', controller.getUser);//10
	app.post('/api/addfriend', controller.addFriend);//11

	app.get('/api/getcurrentuser', controller.getCurrentUser);//12
	app.get('/api/getFriendsPosts', controller.getFriendsPosts);//13
	app.post('/api/rate', controller.rate);//14
	app.post('/api/loadPost', controller.loadPost);//15
	app.get('/api/topPost', controller.topPost);//16
	app.get('/api/getNumberOfStars', controller.getNumberOfStars);
	app.post('/api/findbyusername', controller.findbyusername);
	app.post('/api/getnameusers', controller.getnameusers);
	app.get('/api/createProfilePic', controller.createProfilePic);
	app.get('/api/topcontrib', controller.topcontrib);
	app.get('/api/getNotifications', controller.getNotifications);

}
