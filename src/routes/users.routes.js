const { Router } = require("express")

const usersRouts = Router()

usersRouts.post("/", (request, response) => {
  const {name, email, password} = request.body

  response.json({name, email, password})
})

module.exports = usersRouts