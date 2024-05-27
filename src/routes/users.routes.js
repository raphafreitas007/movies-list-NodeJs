const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRouts = Router()

const usersController = new UsersController()

usersRouts.post("/", usersController.create)

module.exports = usersRouts