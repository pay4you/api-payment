import db from '../models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import config from '../config/config'
import establishment from '../models/establishment';

const env = process.env.NODE_ENV || 'development';

const User = db.sequelize.import(__dirname + "./../models/user")

function get(req, res, next) {
    User.findAll({ 
        limit: 10,
        attributes: ['id','name', 'email', 'cpf', 'address', 'phone'] 
    })
        .then(users => {
            return res.status(200).json(users);
        })
        .catch(error => {
            return res.status(500).json(error)
        })
}

function getById(req, res, next) {
    const userToken = req.decoded;
    req.$models.user.findOne({
        where: {id: userToken.id},
        attributes: ['id','name', 'email', 'cpf', 'address', 'phone']
      })
        .then(user => {
            let response = { 
                success: true,
                isRoot: isRoot(user.role) 
            }
            if(!isRoot(user.role)) {
                user.getEstablishments()
                .then(establishments => {
                    response.establishments = establishments
                    return res.status(200).json(response);
                })
            } else {
                return res.status(200).json(response);
            }
        })
        .catch(error => {
            res.status(500).json({success: false});
        })
}

function post(req, res, next) {
    User.create({ 
            name: req.body.name, 
            email: req.body.email, 
            password: req.body.password, 
            cpf: req.body.cpf, 
            address: req.body.address, 
            phone: req.body.phone,
            role: req.body.role 
        })
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
    const user = req.decoded;
    req.$models.user.update(req.body, {where: { id: user.id } })  
        .then(userUpdated => {            
            res.status(200).json({success: true});
        })
        .catch(error => {
            res.status(500).json({success: false});
        })
}

function authenticate(req, res, next) {
    req.$models.user
        .findOne({ 
            where: {
                email: req.body.email
            } 
        })
        .then(user => {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const payload = {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }            
                const token = jwt.sign(payload, config[env].secret, {
                    expiresIn: 24*24*60
                });
                let response = { 
                    success: true,
                    token: token,
                    isRoot: isRoot(user.role) 
                }
                if(!isRoot(user.role)) {
                    user.getEstablishments()
                    .then(establishments => {
                        response.establishments = establishments
                        return res.status(200).json(response);
                    })
                } else {
                    return res.status(200).json(response);
                }
            } else {
                res.status(400).json({ success: false, message: 'Authentication failed.' });

            }
        })  
        .catch(err => {
            res.status(500).json({success: false})
        })  
}

function isRoot (role) {
    if(role === 0)
        return true
    return false
}
export default {
    authenticate,
    get,
    getById,
    post,
    remove,
    put
}