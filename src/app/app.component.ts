import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-huflit';

  teachers : Teacher[] = [new Teacher(1,"Cọp"), new Teacher(2,"Beo")];
  students : Student[] = [new Student(1,"Cọp"), new Student(2,"Beo")];

  

}
