
const env = process.env.NODE_ENV || 'development';

function get(req, res, next) {

}

function getById(req, res, next) {

}

function post(req, res, next) {
    
}

function remove(req, res, next) {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
}

function put(req, res, next) {
    const user = req.decoded;
}


export default {
    get,
    getById,
    post,
    remove,
    put
}