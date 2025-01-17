const UserModels = require('../models/UserModels');

const registerUser = (req, res) => {
    const userCreated = UserModels.create(req.body);
    res.json({
        'message': 'Usuário criado com sucesso'
    });
}

const findUser = async (req, res) => {
    const user = await UserModels.findByPk(req.params.id);
    res.json({
        'users': user
    });
}

const allUsers = async (req, res) => {
    const userall = await UserModels.findAll(req.body);
    res.json({
        'allusers': userall
    });
}

module.exports = {
    registerUser, 
    allUsers,
    findUser
}
