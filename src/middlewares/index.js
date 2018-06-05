import jwt from 'jsonwebtoken'
import config from '../../config/config'

const env = process.env.NODE_ENV || 'development';

function isAuthenticated(req, res, next) {

    const token = req.body.token || req.query.token || req.headers['authorization'];
    if (token) {
        jwt.verify(token, config[env].secret, function(err, decoded) {      
            if (err) {
                return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                req.decoded = decoded;    
                next();
            }
        })
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
}

export {
    isAuthenticated
}