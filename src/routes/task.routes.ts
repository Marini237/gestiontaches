import { Router, Request, Response } from "express";
import { taskService } from "../services/task.service";

export const taskRouter = Router();

taskRouter.get("/", (req: Request, res: Response) => {
  const tasks = taskService.getAll();
  res.json(tasks);
});

taskRouter.post('/', (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const task = taskService.create(title, description);
  res.status(201).json(task);
});

taskRouter.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  taskService.delete(id);
  res.status(204).send();
});

taskRouter.patch('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  if (status !== "pending" && status !== "done") {
    return res.status(400).json({ message: "Invalid status" });
  }

  const task = taskService.updateStatus(id, status);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});
