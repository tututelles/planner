const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
