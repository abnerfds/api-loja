const express = require('express')
const { registerUser, login } = require('./controllers/UserController');
const { verifyJwtMiddleware } = require('./middleware/verifyJwtMiddleware');

const app = express()

app.use(express.json());

app.post('/register_user', registerUser)

app.post('/login', login)

app.post('/kick', verifyJwtMiddleware, (req, res) => res.json(req.user.id))

const port = 3000
app.listen(port, () => {
  console.log(`Rodando em localhost:${port}`)
})