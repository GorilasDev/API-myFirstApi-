require("express-async-errors")

const migrationsRun = require("./database/sqlite/migrations")

const AppError = require("./utils/AppError")

const express = require("express");
const routes = require("./routes");

migrationsRun();


const app = express();
// coloquei isso pro Insomnia entender que estamos mandando em JSON pra ela
app.use(express.json());

// *** Método GET - Route Params ***

// app.get("/message/:id/:user", (request, response) => {
    
    
//     response.send(`Número: ${request.params.id}, SGT: ${request.params.user}`);
    
// })




// ***  Método GET - Query Params ***

// app.get("/", (request, response) => {
    
//     const { page, limit } = request.query;

//     response.send(`Página: ${page} e tempos: ${limit}`)

// } )



// *** Método POST

// app.post("/users", (request, response) => {

//     const { name, email, password } = request.body;

    
//     response.json({ name, email, password })



// });

app.use(routes);

app.use((error, request, response, next) => { 
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));