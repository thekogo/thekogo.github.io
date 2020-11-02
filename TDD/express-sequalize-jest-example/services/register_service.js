module.exports = function (db) {
    return {
        async userCreate(username) {
            const user = db.user.create({
                username: username,
            });

            return {
                errorMessage: '',
                username: username,
                userId: user.id
            }
        },
        async userCreate2(username) {
            const user = db.user.create({
                username: username,
            });

            return {
                errorMessage: '',
                username: username,
                userId: user.id
            }
        },
    }
}