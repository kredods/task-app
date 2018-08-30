import { TaskDetailsPage } from './../task-details/task-details';
import { NewTaskPage } from './../new-task/new-task';
import { TaskManager } from './../../model/task-manager';
import { Task } from './../../model/task';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'task-list.html'
})
export class TaskListPage {
  tasks: Task[];

  constructor(
    private taskManager: TaskManager,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {
    this.getTasks();
  }

  getTasks() {
    return this.taskManager.getTasks().then((tasks) => {
      this.tasks = tasks;
    });;
  }

  createNewTask() {
    let modal = this.modalCtrl.create(NewTaskPage);
    modal.present();
  }


  clearAll() {
    this.taskManager.clearAll();
    this.getTasks();
  }

  itemSelected(task) {
    this.navCtrl.push(TaskDetailsPage, {
      task: JSON.stringify(task)
    })
  }
}
