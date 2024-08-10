const { generateJwt } = require('../helpers/jwtHelpers');
const UserModels = require('../models/UserModels');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    console.log(req.body);

    const saltRounds = 10;
    
    const password = req.body.password;

    const passwordHash = await bcrypt.hash(password, saltRounds);

    req.body.password = passwordHash;

    UserModels.create(req.body);
    res.status(201).json({
        'message': 'Usuário criado com sucesso'
    });
}


const login = async (req, res) => {
    const user = req.body;

    const isUserReal = await UserModels.findOne({
        where: { email: user.email }
    })
    if(!isUserReal) {
        return res.json("Usuário não foi encontrado");
    }

    const result = await bcrypt.compare(user.password, isUserReal.password);
    if(!result) {
        return res.json("Dados de login inválidos")
    }

    return res.json({
        'token': generateJwt(isUserReal.id)
    })
}

module.exports = {
    registerUser, 
    login,
}
