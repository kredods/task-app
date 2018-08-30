import { TaskManager } from './../../model/task-manager';
import { Task } from './../../model/task';
import { Component } from '@angular/core';

import { ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'new-task',
  templateUrl: 'new-task.html'
})
export class NewTaskPage {
  name: string = "";

  constructor(
    private taskManager: TaskManager,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create() {
    if (this.name.length !== 0) {
      this.taskManager.addTask(new Task(this.taskManager.getNextIndex(), this.name, []));
      this.dismiss();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Invalid Input',
        subTitle: 'Task Name Cannot Be Empty',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
