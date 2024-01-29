// src/app.test.ts
import { TodoList } from './app';

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('addTask should add a new task to the list', () => {
    todoList.addTask('Buy groceries');
    const tasks = todoList.getAllTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Buy groceries');
    expect(tasks[0].completed).toBe(false);
  });

  test('markTaskAsCompleted should mark a task as completed', () => {
    todoList.addTask('Read a book');
    const [task] = todoList.getAllTasks();
    todoList.markTaskAsCompleted(task.id);
    expect(task.completed).toBe(true);
  });

  test('removeTask should remove a task from the list', () => {
    todoList.addTask('Clean the house');
    const [task] = todoList.getAllTasks();
    todoList.removeTask(task.id);
    expect(todoList.getAllTasks().length).toBe(0);
  });
});
