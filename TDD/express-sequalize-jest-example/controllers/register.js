const db = require('../models')
const registerService = require('../services/register_service')(db);

module.exports = function (db) {
    return {
        async registerCompleted(req, res, next) {
            const dataSend = registerService.userCreate(res.body.username);
            res.render('register_result', dataSend);
            next();
        }
    }
}