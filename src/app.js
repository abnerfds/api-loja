const express = require('express')
const { registerUser, allUsers, findUser } = require('./controllers/UserController')

const app = express()

app.use(express.json());

app.post('/register_user', registerUser)

app.get('/all_users', allUsers)

app.get('/v1/user/:id', findUser)

const port = 3000
app.listen(port, () => {
  console.log(`Rodando em localhost:${port}`)
})