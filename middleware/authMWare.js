const authutils = require('./authUtils');

function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({error: "No autorizado1"});
    }
    const decodedtoken = authutils.verifyToken(token);
    if(!decodedtoken){
        return res.status(401).json({error: 'No autorizado2'}); 
    }
    req.user = decodedtoken;
    next();
}

module.exports = authenticate;