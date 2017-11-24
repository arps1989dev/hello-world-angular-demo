import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
      <h2>{{ title }}</h2>      
      <ul>
        <li *ngFor="let course of courses">{{course}}</li>
      </ul>
      <div (click)="onDivClick()">
        <button class="btn btn-primary" [class.active] = "isActive" (click)="onSave($event)">save</button>
      </div> <br/>
      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> <br/><br/>
      {{course.title | uppercase }} <br/>
      {{course.students | number}} <br/>
      {{course.rating | number: '1.1-1' }} <br/>
      {{course.price | currency: 'AUD':true:'3.2-2'}} <br/>
      {{course.releaseDate | date: 'shortDate'}}<br/><br/>
      {{ text | summary:10 }}
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  isActive = true;
  email = "admin@example.com"
  course = {
    title: "The complete angular course",
    rating: 4.9456,
    students: 50125,
    price: 190,
    releaseDate: new Date(2016, 3, 1)
  }
  text = `which we custom created and carefully printed especially for you. Because of this, your order is not returnable, but there's hope! If your AlterBasic order isn't exactly what you expected, give our Help Team a shout. We'll gladly replace  any item's you are unsatisfied with or that arrive damaged or defective within 5 days from your purchase. We'll work with you to ensure that you're happy with every AlterBasic purchase. Guaranteed.
        `

  constructor(service: CoursesService){
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }

  onSave($event){
    $event.stopPropagation();
    console.log("button was clicked" , $event);
  }

  onDivClick(){
    console.log("Div was clicked.")
  }

  onKeyUp(){
    console.log(this.email);
    
  }
}