import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [{ id: 1, task: 'Walk the dog', completed: false }];

  getAllTasks() {
    return this.tasks;
  }
}
