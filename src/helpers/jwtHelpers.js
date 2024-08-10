require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateJwt(idUser) {
    const payload = {
        id: idUser
    }
    const options = {
        expiresIn: '1h'
    };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    console.log(process.env.JWT_SECRET)
    return token
}


module.exports = {
    generateJwt
}