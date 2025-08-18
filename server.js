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

  res.status(200).json(bruxo);
    } else {
    res.status(404).json({
      message: `Nenhum bruxo com ID ${id} encontrado.`
    });
  }
});

app.get("/bruxos/casa/:casa", (req, res) => {

  let casa = req.params.casa;
  
  const bruxosDaCasa = bruxos.filter(b => b.casa.toLowerCase() === casa.toLowerCase());

  if (bruxosDaCasa.length > 0) {
    res.status(200).json(bruxosDaCasa);

  } else {

    res.status(404).json({
      mensagem: "Nenhum bruxo encontrado na casa!"
    })
  }
});

app.get("/bruxos/nome/:nome", (req, res) => {

  let nome = req.params.nome.toLowerCase();
  
  const bruxosChamados = bruxos.filter(b => b.nome.toLowerCase().includes(nome)
);
  if (bruxosChamados.length > 0) {

    res.status(200).json(bruxosChamados);
  } else {

    res.status(404).json({
      mensagem: "Nenhum bruxo encontrado na nome!"
    })
  }
});
app.listen(serverPort, () => {
    console.log(`Servidor funcionando em ${serverPort}`)
});
