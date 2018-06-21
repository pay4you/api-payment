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

function getProducts(req, res, next) {
    const id = req.params.id;
    const pageNumber = req.query.pageNumber || 1
    const pageSize = req.query.pageSize || 10
    req.$models.establishment
    .findOne({
        where: {id: id},
        attributes: ['id']
    })
    .then(establishment => {
        establishment.getProducts()
        .then(products => {
            console.log(products);
            
            res.status(200).json({success: true, products});
        })
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

function postProducts(req, res, next) {
    const id = req.params.id;
    req.$models.establishment
    .findOne({
        where: {id: id},
        attributes: ['id']
    })
    .then(establishment => {
        req.$models.product
        .build(req.body)
        .save()
        .then(product => {
            product.setEstablishment(establishment)
            res.status(200).json({success: true, product});
        })
    })
    .catch(error => {
        res.status(500).json({success: false});
    }) 
}
function postUser (req, res, next) {
    const id = req.params.id;
    const user = req.params.user;
    if(req.decoded.role === 0) {
        req.$models.establishment
        .findOne({
            where: {id: id},
            attributes: ['id']
        })
        .then(establishment => {
            req.$models.user
            .findOne({
                where: {id: user},
                attributes: ['id']
            })
            .then(userAll => {
                establishment.addUser(userAll)
                res.status(200).json({success: true, userAll, establishment});
            })
        })
        .catch(error => {
            res.status(500).json({success: false});
        })
    } else {
        res.status(403).json({success: false});
    }
}
function put(req, res, next) {
    const id = req.params.id
    req.$models.establishment.update(req.body, {where: { id: id } })  
        .then(establishmentUpdated => {            
            res.status(200).json({success: true, establishmentUpdated});
        })
        .catch(error => {
            res.status(500).json({success: false});
        })
}

function getOrders(req, res, next) {
    const id = req.params.id;
    const pageNumber = req.query.pageNumber || 1
    const pageSize = req.query.pageSize || 10
    const status = req.query.status || 1

    req.$models.order
    .findAll({
        where: {establishmentId: id, status: status}
    })
    .then(orders => {
        return res.status(200).json({success: true, orders});
    })
    .catch(error => {
        return res.status(500).json({success: false});
    }) 
}

export default {
    get,
    getById,
    getProducts,
    getOrders,
    post,
    postProducts,
    postUser,
    put
}