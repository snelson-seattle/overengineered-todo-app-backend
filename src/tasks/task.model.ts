export interface Task {
  id: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In progress',
  DONE = 'Done',
}
