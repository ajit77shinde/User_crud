module.exports = (app) => {
    const user = require('../controllers/note.controller.js');

    app.post('/user', user.create);

    app.get('/user', user.findAll);

}