const express = require("express")
require('dotenv').config();
const app = express()
const router = express.Router()
const port = process.env.PORT || 3000;
const cors = require("cors")
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')));

const response = {
  message: "Rota funcionando",
  status: "success",
  data: {
    example: "Este é um exemplo de resposta JSON"
  }
};

router.get("/", (req, res) => {
  res.json(response)
})

app.use("/", router)

require('./config/db')

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})