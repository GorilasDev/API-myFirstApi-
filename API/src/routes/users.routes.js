const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRouters = Router();

const usersController = new UsersController();

// function myMiddleware(request, response, next) {
//     console.log("voce passou pelo Middleware!")
//     console.log(request.body)
    
//     next();
// }


// usersRouters.use(myMiddleware); -> colocando isso, todas as rotas vão passar pelo Middleware.

usersRouters.post("/", usersController.create);
usersRouters.put("/:id", usersController.update);


module.exports = usersRouters;