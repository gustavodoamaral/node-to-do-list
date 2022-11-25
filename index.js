//script backend javascript

const express = require('express'); // required: busca dentro do node_modules o express.
const path = require("path"); // importação do path: responsável por redirecionar as pastas, ex: conectar o CSS ao HTML
const routes = require("./routes/routes")

const app = express(); // recebe o express sendo executado. 
const port = 3000

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(routes)


app.listen(3000, () => 
console.log(`Servidor rodando em http://localhost:${port}`)
); 