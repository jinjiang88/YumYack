var controller = require('./../controllers/controller');

module.exports = app => {
	app.get('/api/login', controller.login);
    app.get('/api/getallusers', controller.getAllUsers);
    app.post('/api/register', controller.register);
		app.get('/api/grossest', controller.grossest);
		app.get('/api/averagin', controller.averaging);
}
