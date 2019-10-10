import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material002';
  alarmClockPrimary = '<mat-icon color="primary">alarm_add</mat-icon>';
  notifications = 'D';
  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(
        () => {
          this.showSpinner = false;
        }, 5000
    );
  }

  log(state) {
    console.log(state);
  }
}
