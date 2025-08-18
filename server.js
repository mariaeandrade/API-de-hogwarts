import express from "express";
import bruxos from "./src/data/bruxos.js";

const app = express();
const serverPort = 3000;

app.get("/", (req, res) => {
  res.send("Minha API de Harry Potter está ativa!")
});

app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});

app.get("/bruxo/:id", (req, res) => {

  let id = parseInt(req.params.id);

  const bruxo = bruxos.find(b => b.id === id);

  if (bruxo)  {
    res.json({
      sucess: true,
      message: `Bruxo ${bruxo.nome} encontrado!`,
      data: bruxo
    });
  } else {
    res.status(404).json({
      sucess: false,
      error: `Bruxo não encontrado`,
      message: `Nenhum bruxo com ID ${id} encontrado.`
    });
  }
});


app.get("/bruxos", (req, res) => {
  res.json ({
    sucess: true,
    message: "Todos os bruxos em Hogwarts",
    data: bruxo,
    total: bruxos.length
  })
});
app.listen(serverPort, () => {
    console.log(`Servidor funcionando em ${serverPort}`)
});
