'use strict'

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        usuario: {
            type: DataTypes.STRING,
            field: 'usuario'
        },
        senha: {
            type: DataTypes.STRING,
            field: 'senha'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'usuarios',
        timestamps: false
    });

    return Usuario
};

