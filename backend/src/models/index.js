const dbConfig = require('../config/config.json');
const Sequelize = require('sequelize');

const config = dbConfig.dev_container;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    schema: config.schema,
    operatorsAliases: false
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuarios = require('./usuario.model') (sequelize, Sequelize);

module.exports = db;
