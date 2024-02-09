export interface Task {
  title: string;
  description: string;
  subTasks: SubTask[];
  status: BoardColumn;
}

export interface BoardColumn {
  title: string;
  boardTitle: string;
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

export enum DropdownType {
  BOARD = "board",
  TASK = "task",
}
