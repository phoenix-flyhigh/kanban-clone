export interface Task {
  title: string;
  description: string;
  subTasks: SubTask[];
  status: TaskStatus;
}

export interface SubTask {
  title: string;
  completed: boolean;
}

export enum TaskStatus {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}
