const jwt = require('jsonwebtoken');

function verifyJwtMiddleware(req, res, next) {
    const authorization = req.headers.authorization || '';
    const token = authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: "Token não fornecido"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded; // Passa o usuário decodificado para o próximo middleware
        next(); // Permite que a execução continue na próxima função
    } catch (error) {
        console.log(error.message);

        return res.status(403).json({
            message: "Usuário não autorizado"
        });
    }
}


module.exports = {
    verifyJwtMiddleware
}