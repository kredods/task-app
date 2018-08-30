import { TaskDetailsPage } from './../pages/task-details/task-details';
import { NewTaskPage } from './../pages/new-task/new-task';
import { TaskManager } from './../model/task-manager';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { TaskListPage } from '../pages/task-list/task-list';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    NewTaskPage,
    ContactPage,
    TaskDetailsPage,
    TaskListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewTaskPage,
    ContactPage,
    TaskDetailsPage,
    TaskListPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, TaskManager, Storage]
})
export class AppModule { }
