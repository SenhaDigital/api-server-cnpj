const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/cnpj/:cnpj", async (req, res) => {
  const { cnpj } = req.params;
  try {
    const response = await axios.get(
      `https://www.receitaws.com.br/v1/cnpj/${cnpj}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao consultar o CNPJ" });
  }
});

app.listen(port, () => {
  console.info("Aplicação rodando em http://localhost:3000");
});
