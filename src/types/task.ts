export type TaskStatus = "pending" | "done";

export interface Task {
  id:Number;
  title: string;
  description: string;
  status: TaskStatus;
}