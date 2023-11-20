/**
 * Filename: complexCode.js
 * 
 * Description: This code demonstrates a complex implementation of a task management system,
 * where users can create, assign, and manage tasks with different priorities and due dates.
 */

class Task {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.isCompleted = false;
  }

  completeTask() {
    this.isCompleted = true;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  createTask(title, description, priority, dueDate) {
    const task = new Task(title, description, priority, dueDate);
    this.tasks.push(task);
    console.log(`Created task: ${task.title}`);
    return task;
  }

  assignTask(task, assignee) {
    task.assignee = assignee;
    console.log(`Assigned task ${task.title} to ${assignee}`);
  }

  completeTask(task) {
    task.completeTask();
    console.log(`Completed task: ${task.title}`);
  }

  getTasksByPriority(priority) {
    const tasksWithPriority = this.tasks.filter(task => task.priority === priority);
    console.log(`Tasks with priority ${priority}: ${tasksWithPriority.length}`);
    return tasksWithPriority;
  }
}

class TaskManager {
  constructor() {
    this.users = [];
  }

  createUser(name) {
    const user = new User(name);
    this.users.push(user);
    console.log(`Created user: ${user.name}`);
    return user;
  }

  getTotalTasks() {
    const totalTasks = this.users.reduce((count, user) => count + user.tasks.length, 0);
    console.log(`Total tasks: ${totalTasks}`);
    return totalTasks;
  }

  getAllTasks() {
    const allTasks = this.users.flatMap(user => user.tasks);
    console.log(`All tasks: ${allTasks.length}`);
    return allTasks;
  }
}

// Example usage:

const taskManager = new TaskManager();

const user1 = taskManager.createUser("John");
const user2 = taskManager.createUser("Alice");

const task1 = user1.createTask("Implement feature 1", "Implement feature 1 description", "High", "2022-12-31");
user1.assignTask(task1, user2);

const task2 = user2.createTask("Debug issue", "Debug issue description", "Medium", "2022-12-25");

user1.completeTask(task1);
user1.completeTask(task2);

console.log(taskManager.getTotalTasks());
console.log(taskManager.getAllTasks());
console.log(user1.getTasksByPriority("High"));
console.log(user2.getTasksByPriority("Medium"));
