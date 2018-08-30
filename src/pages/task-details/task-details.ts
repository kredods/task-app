import { TaskManager } from './../../model/task-manager';
import { Subtask } from './../../model/subtask';
import { Task } from './../../model/task';
import { Component } from '@angular/core';

import { NavParams, AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'task-details',
  templateUrl: 'task-details.html'
})
export class TaskDetailsPage {
  task: Task;
  showSubtaskInput: boolean = false;
  editShown: boolean = false;
  title: string = "";
  constructor(
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private navCtrl: NavController,
    private taskManager: TaskManager
  ) {
    this.task = new Task(
      JSON.parse(this.navParams.get('task')).id,
      JSON.parse(this.navParams.get('task')).name,
      JSON.parse(this.navParams.get('task')).subtasks
    );
  }

  showInput() {
    this.showSubtaskInput = true;
  }

  cancelInput() {
    this.showSubtaskInput = false;
  }

  createSubtask() {
    if (this.title.length === 0) {
      let alert = this.alertCtrl.create({
        title: 'Invalid Input',
        subTitle: 'Subtask Name Cannot Be Empty',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (this.task.isDuplicate(this.title)) {
      let alert = this.alertCtrl.create({
        title: 'Invalid Input',
        subTitle: 'Subtask Already Exists',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      this.task.addSubtask(new Subtask(this.title));
      this.title = "";
      this.cancelInput();
    }
  }

  deleteTask() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to delete this task and all its subtasks ?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            //do nothing
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.taskManager.deleteTask(this.task);
            this.goBack();
          }
        }
      ]
    });
    confirm.present();
  }

  goBack() {
    this.taskManager.updateTask(this.task);
    this.navCtrl.pop();
  }

  deleteSubtask(subtask: Subtask) {
    this.task.deleteSubtask(subtask);
  }

  toggleEdit() {
    this.editShown = !this.editShown;
  }
}
