import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TaskListPage } from '../pages/task-list/task-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TaskListPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
