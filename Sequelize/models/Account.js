module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Account', {
        name: {
            type: DataTypes.STRING(255)
        },
        size: {
            type: DataTypes.STRING(2)
        }
    }, {
        tableName: 'branches',
        timestamps: false,
    });

    model.associate = models => {
        model.belongsTo(models.Branch, { foreignKey: 'branch_id' });
        model.belongsToMany(models.Customer, { through: models.Own, foreignKey: 'account_id'})
    }

    return model;
}