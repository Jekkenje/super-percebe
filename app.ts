// src/app.ts
class Task {
    constructor(public id: number, public description: string, public completed: boolean = false) {}
  }
  
  export class TodoList {
    private tasks: Task[] = [];
  
    addTask(description: string): void {
      const newTask = new Task(this.tasks.length + 1, description);
      this.tasks.push(newTask);
    }
  
    markTaskAsCompleted(taskId: number): void {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = true;
      }
    }
  
    removeTask(taskId: number): void {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
    }
  
    getAllTasks(): Task[] {
      return this.tasks;
    }
  }
  