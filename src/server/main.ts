import xhr2 from 'xhr2';
global.XMLHttpRequest = xhr2;
import express from "express";
import ViteExpress from "vite-express";
import bodyParser from 'body-parser';

import ollama from 'ollama'
import modelfile from './model.js'

const app = express();
await ollama.create({ model: 'chip', modelfile: modelfile })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const response = await ollama.chat({
    model: 'chip',
    messages: [{ role: 'user', content: message }],
  })
  
  res.json(response);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);