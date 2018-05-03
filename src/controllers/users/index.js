function get(req, res, next) {
    res.status(200).send(`Requisição recebida com sucesso!`);
}

function getById(req, res, next) {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
}

function post(req, res, next) {
    res.status(201).send(`Requisição recebida com sucesso!`);
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