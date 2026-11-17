import express from 'express';
import cors from 'cors';
import materiRoutes from './route/materi.routes.js';
import {
  tidakDitemukan,
  penangananError
} from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.get('/api/sehat', (req, res) => {
  res.status(200).json({
    status: 'ok'
  });
});

// Route materi
app.use('/api/materi', materiRoutes);

// Penanganan rute dan error
app.use(tidakDitemukan);
app.use(penangananError);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});