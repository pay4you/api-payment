import db from '../models'

const User = db.sequelize.import(__dirname + "./../models/user")

function get(req, res, next) {
    res.status(200).send(`Requisição recebida com sucesso!`);
}

function getById(req, res, next) {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
}

function post(req, res, next) {
    User.create({ name: 'Lucas Trindade', email: 'lucasktrindade@gmail.com', password: '123456', cpf: 1544, address: 'endereço', phone: 2198 })
        .then(user => {
            return res.status(201).json(user);
        })
        .catch(e => {
            res.status(500).json(e)
        })
}

function remove(req, res, next) {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
}

function put(req, res, next) {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
}

export default {
    get,
    getById,
    post,
    remove,
    put
}