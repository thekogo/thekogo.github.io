module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Customer', {
        name: {
            type: DataTypes.STRING(255)
        },
        age: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'customers',
        timestamps: false,
    });

    model.associate = models => {
        model.belongsToMany(models.Account, { through: models.Own, foreignKey: 'customer_id'})
    }

    return model;
}