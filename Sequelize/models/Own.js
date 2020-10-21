module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Own', {
        day: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'owns',
        timestamps: false,
    });
    
    return model;
}