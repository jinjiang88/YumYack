var controller = require('./../controllers/controller');

module.exports = app => {
	app.get('/api/login', controller.login);
    app.get('/api/getallusers', controller.getAllUsers);
    app.post('/api/register', controller.register);
}