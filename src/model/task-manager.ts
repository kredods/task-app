import { Storage } from '@ionic/storage';
import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskManager {
    cachedTasks: Task[];
    taskIndex: number = 0;
    constructor(private storage: Storage) {
        storage.length().then((length) => {
            if (length === 0) {
                storage.set('tasks', []);
            }
        });
    }

    /*** get all tasks **/
    getTasks() {
        return this.storage.get('tasks').then(tasks => {
            this.cachedTasks = tasks
            return this.cachedTasks;
        });

    }
    /*** add a task object to the list ***/
    addTask(task: Task) {
        this.cachedTasks.push(task);
        this.syncTasks();
    }

    /*** update an already added task */
    updateTask(task: Task) {
        let index = this.cachedTasks.indexOf(this.cachedTasks.find(a => a.id === task.id));
        this.cachedTasks[index] = task;
        this.syncTasks();
    }

    /** get the next index for a task to be created **/
    getNextIndex(): number {
        return this.cachedTasks.length === 0 ? 0 : this.cachedTasks[this.cachedTasks.length - 1].id++;
    }

    /*** delete a task */
    deleteTask(task: Task) {
        let index = this.cachedTasks.indexOf(this.cachedTasks.find(a => a.id === task.id));
        this.cachedTasks.splice(index, 1);
        this.syncTasks();
    }
    /** delete all tasks */
    clearAll() {
        this.cachedTasks = [];
        this.syncTasks();
    }
    /** sync with backend */
    syncTasks() {
        this.storage.set('tasks', this.cachedTasks);
    }
}
