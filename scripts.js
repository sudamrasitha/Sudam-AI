import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/proxy', async (req, res) => {
  try {
    const payload = req.body;
    const response = await axios.post('https://chateverywhere.app/api/chat/', payload, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'unknown error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));onsole.log(`✅ Proxy server running at http://localhost:${PORT}`);
});