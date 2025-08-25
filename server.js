import express from "express";
import dados from "./src/data/dados.js";

const { animais, casas, pocoes, varinhas, bruxos } = dados;
const app = express();
const serverPort = 3000;

app.get("/", (req, res) => {
  res.send("Minha API de Harry Potter está ativa!");
});

app.get("/bruxos", (req, res) => {
  res.json(bruxos);
});

app.get("/bruxos/id/:id", (req, res) => {
  let id = parseInt(req.params.id);

  const bruxos = bruxos.find((b) => b.id === id);

  if (bruxos) {
    res.status(200).json(bruxos);
  } else {
    res.status(404).json({
      message: `Nenhum bruxo com ID ${id} encontrado.`,
    });
  }
});

app.get("/bruxos/nome/:nome", (req, res) => {
  let nome = req.params.nome.toLowerCase();

  const bruxosChamados = bruxos.filter((b) =>
    b.nome.toLowerCase().includes(nome)
  );
  if (bruxosChamados.length > 0) {
    res.status(200).json(bruxosChamados);
  } else {
    res.status(404).json({
      mensagem: "Nenhum bruxo encontrado com esse nome!",
    });
  }
});
app.get("/bruxos/vivo/nao", (req, res) => {
  const resultado = bruxos.filter((b) => !b.status);
  if (resultado) {
    res.status(200).json(resultado);
  } else {
    res.status(404).json({ erro: "nenhum bruxo morto encontrado" });
  }
});

app.get("/varinhas", (req, res) => {
  res.json(varinhas);
});

app.get("/varinhas/:id", (req, res) => {
  let id = parseInt(req.params.id);

  const varinhas = varinhas.find((v) => v.id === id);

  if (varinhas) {
    res.status(200).json(varinhas);
  } else {
    res.status(404).json({
      message: `Nenhuma varinha com ID ${id} encontrado.`,
    });
  }
});

app.get("/animais", (req, res) => {
  res.json(animais);
});

app.get("/animais/id/:id", (req, res) => {
  let id = parseInt(req.params.id);

  const animais = animais.find((a) => a.id === id);

  if (animais) {
    res.status(200).json(animais);
  } else {
    res.status(404).json({
      erro: `Nenhum animal encontrado com o id ${id}`,
    });
  }
});

app.get("/pocoes", (req, res) => {
  res.json(pocoes);
});

app.get("/pocoes/id/:id", (req, res) => {
  let id = parseInt(req.params.id);

  const pocoes = pocoes.find((p) => p.id === id);

  if (pocoes) {
    res.status(200).json(pocoes);
  } else {
    res.status(404).json({
      erro: `Nenhuma poção com o ID ${id} encontrada`,
    });
  }
});

app.get("/casas", (req, res) => {
  res.json(casas);
});

app.get("/casas/id/:id", (req, res) => {
  let id = parseInt(req.params.id);

  const casas = casas.find((c) => c.id === id);

  if (casas.length > 0) {
    res.status(200).json(casas);
  } else {
    res.status(404).json({
      erro: `Nenhuma casa com o id ${id} encontrada `,
    });
  }
});

app.listen(serverPort, () => {
  console.log(`Servidor funcionando em ${serverPort}`);
});
