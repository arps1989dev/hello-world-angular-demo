import { FavoriteComponent, FavoriteChangeEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  }

  viewMode = 'something';

  courses;
  canSave = true;

  task = {
    title: 'Review Application',
    assignee: null
  }
  onFavoriteChange(eventArgs: FavoriteChangeEventArgs) {
    console.log("Favorite changed.", eventArgs)
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' })
  }

  onChange(course) {
    // let index = this.courses.indexOf(course);
    // this.courses.splice(index, 1);
    course.name = 'UpDated';
  }

  loadCourse() {
    this.courses =  [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ]
  }
}
