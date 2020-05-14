const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    
    Usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro"
            })
        });

};

exports.findOne = (req, res) => {

    Usuario.findByPk(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro"
            })
        });

};