import establishment from "../models/establishment";

function get(req, res, next) {
    
    const pageNumber = req.query.pageNumber || 1
    const pageSize = req.query.pageSize || 10
    
    req.$models.order
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
    req.$models.order
    .findOne({
        where: {id: id}
    })
    .then(order => {
        order.getProducts()
        .then(products => {
            res.status(200).json({success: true, order, products});
        })
    })
    .catch(error => {
        res.status(500).json({success: false});
    })
}


function post(req, res, next) {
    const products = req.body.products
    const establishmentId = req.body.establishment
    const status = req.body.status
    req.$models.order
    .build({status: status, userId: req.decoded.id, establishmentId: establishmentId})
    .save()
        .then(order => {
            products.forEach(prodId => {
                req.$models.product
                .findOne({
                    where: {id: prodId},
                    attributes: ['id']
                })
                .then(product => {
                    order.addProduct(product)
                    return res.status(201).json({success:true});          
                })
                .catch(error => {
                    return res.status(500).json(error)
                })
            })
            return order
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