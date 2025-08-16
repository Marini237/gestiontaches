import {Task} from "./../types/task";

let tasks : Task[] = [];
let idCounter = 1;

export const taskService = {
    getAll : () : Task[] => tasks,

    create: (title: string, description: string) : Task => {
        const newTask: Task = {
            id: idCounter++,
            title,
            description,
            status: "pending",
        };
        tasks.push(newTask);
        return newTask;
    },

    delete: (id: number): void => {
        tasks = tasks.filter(task => task.id !== id);
      },
    
      updateStatus: (id: number, status: "pending" | "done"): Task | undefined => {
        const task = tasks.find(task => task.id === id);
        if (task) {
          task.status = status;
        }
        return task;
      }
}