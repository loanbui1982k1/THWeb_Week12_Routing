const studentRouter = require('./student');
const fallBackRouter = require('./fallBack.js');

function route(app) {
    app.use('/students', studentRouter);
    app.use('/*', fallBackRouter);
}

module.exports = route;