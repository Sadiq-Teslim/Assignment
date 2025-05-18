"use strict";
class Task {
    constructor(taskId, title, isCompleted) {
        this.isCompleted = true;
        this.taskId = taskId;
        this.title = title;
        this.isCompleted = isCompleted;
    }
    //Method to mark the task as completed. This will be used in the actual task manager
    markAsCompleted() {
        this.isCompleted = true;
        console.log(`Task "${this.title}" with the ID "${this.taskId}" is now completed`);
    }
    //Method to mark the task as pending. This will be used in the actual task manager
    markAsPending() {
        this.isCompleted = false;
        console.log(`Task "${this.title}" with the ID "${this.taskId}" is now marked as pending`);
    }
}
class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    //Method to validate the user
    validateUser() {
        if (this.userId && this.name && this.email) {
            console.log(`User ${this.name} is a registered user`);
            return true;
        }
        else {
            console.log(`User ${this.name} is not a registered user`);
            return false;
        }
    }
}
class TaskManager {
    constructor(tasks, user) {
        this.tasks = [];
        this.tasks = tasks;
        this.user = user;
    }
    // Check if task ID exists
    taskExists(taskId) {
        return this.tasks.some((task) => task.taskId === taskId);
    }
    //Method to add a task
    addTask(task) {
        if (this.user.validateUser()) {
            if (this.taskExists(task.taskId)) {
                console.log(`Error: Task with the ID "${task.taskId}" already exists. Cannot add duplicate.`);
                return;
            }
            this.tasks.push(task);
            console.log(`Task "${task.title}" with the ID "${task.taskId}" has been added`);
        }
        else {
            console.log(`User ${this.user.name} is not valid. Task cannot be added`);
        }
    }
    //Method to delete a task
    deleteTask(taskId) {
        if (this.user.validateUser()) {
            if (!this.taskExists(taskId)) {
                console.log(`Error: Task with the ID "${taskId}" does not exist. Cannot delete.`);
                return;
            }
            this.tasks = this.tasks.filter((tasks) => tasks.taskId !== taskId);
            console.log(`Task with the ID "${taskId}" has been deleted`);
        }
        else {
            console.log(`User ${this.user.name} is not valid. Task cannot be deleted`);
        }
    }
    //Method to list all tasks
    listTasks() {
        if (this.user.validateUser()) {
            console.log("List of tasks:");
            this.tasks.forEach((task) => {
                const status = task.isCompleted ? "completed" : "pending";
                console.log(`\nTask ID: ${task.taskId}, Title: ${task.title}, Status: ${status}`);
            });
        }
        else {
            console.log(`User ${this.user.name} is not valid. Tasks cannot be listed`);
        }
    }
    //Method to mark a task as completed
    completeTask(taskId) {
        if (this.user.validateUser()) {
            // Check if the task exists before marking it as completed
            if (!this.taskExists(taskId)) {
                console.log(`Error: Task with the ID "${taskId}" does not exist. Cannot mark as completed.`);
                return;
            }
            const task = this.tasks.find((task) => task.taskId === taskId);
            if (task) {
                task.markAsCompleted();
            }
            else {
                console.log(`Task with the id ${taskId} not found`);
            }
        }
        else {
            console.log(`User ${this.user.name} is not valid. Task cannot be marked as completed`);
        }
    }
    //Method to mark a task as pending
    pendingTask(taskId) {
        if (this.user.validateUser()) {
            // Check if the task exists before marking it as pending
            if (!this.taskExists(taskId)) {
                console.log(`Error: Task with the ID "${taskId}" does not exist. Cannot mark as pending.`);
                return;
            }
            const task = this.tasks.find((task) => task.taskId === taskId);
            if (task) {
                task.markAsPending();
            }
            else {
                console.log(`Task with the id ${taskId} not found`);
            }
        }
        else {
            console.log(`User ${this.user.name} is not valid. Task cannot be marked as pending`);
        }
    }
}
const task1 = new Task(1, "Build a Task Manager", true);
const task2 = new Task(2, "Test the Task Manager", false);
const task3 = new Task(3, "Deploy the Task Manager", false);
// Testing the classes. Long Console logs to be used to check the output of the methods
//Create a user
const user1 = new User(1, "John Doe", "teslim@gmail.com");
//Create a task manager instance
const myTaskManager = new TaskManager([task1, task2, task3], user1);
//List all tasks
myTaskManager.listTasks();
//Add a task
const task4 = new Task(6, "Deploy the Task Manager", false);
myTaskManager.addTask(task4);
//List all tasks again
myTaskManager.listTasks();
//Delete a task: trying to check error handling
myTaskManager.deleteTask(4);
//List all tasks again
myTaskManager.listTasks();
//Actually delete a task
myTaskManager.deleteTask(2);
//List all tasks again
myTaskManager.listTasks();
//Mark a task as completed
myTaskManager.completeTask(4);
//List all tasks again
myTaskManager.listTasks();
//Mark a task as pending
myTaskManager.pendingTask(5);
//List all tasks again
myTaskManager.listTasks();
