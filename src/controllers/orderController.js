import establishment from "../models/establishment";

function get(req, res, next) {
    
    const pageNumber = req.query.pageNumber || 1
    const pageSize = req.query.pageSize || 10
    
    req.$models.establishment
    .findAndCountAll({
        limit: parseInt(pageSize),
        offset: parseInt(pageNumber) - 1
    })
    .then(({rows, count}) => {
        return res.status(200).json({
            items: rows, 
            paginate: {
                count,
                page: parseInt(pageNumber),
                size: parseInt(pageSize)
            } 
        });
    })
    .catch(error => {
        return res.status(500).json(error)
    })
}

function getById(req, res, next) {
    const id = req.params.id;
    req.$models.establishment
    .findOne({
        where: {id: id},
        attributes: ['id','social_name', 'phone', 'address', 'cnpj']
    })
    .then(establishment => {
        res.status(200).json({success: true, establishment});
    })
    .catch(error => {
        res.status(500).json({success: false});
    })
}


function post(req, res, next) {
    req.$models.establishment
    .create({
        social_name: req.body.socialName, 
        cnpj: req.body.cnpj, 
        address: req.body.address, 
        phone: req.body.phone
    })
    .then(establishment => {
        return res.status(201).json(establishment);
    })
    .catch(error => {
        return res.status(500).json(error)
    })  
}


function put(req, res, next) {
    const id = req.params.id
    
}


export default {
    get,
    getById,
    post,
    put
}