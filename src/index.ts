import express from 'express';
import cors from 'cors';
import { taskRouter } from './routes/task.routes';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});