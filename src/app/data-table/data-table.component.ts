import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import * as dataLessons from 'src/assets/dataLessons.json'; 
import { Lesson } from '../lesson';
// export class Lesson implements OnInit {
//   Lessons: Lesson[];
  
//   constructor(private HttpClient: HttpClient) { }

//   ngOnInit(): void {
//     this.HttpClient.get('/src/assets/dataLessons.json')
//     .subscribe((result: Lesson[]) => {
//       this.Lessons = result;
//     })
//   }
// //     public name: string,
// //     ...) {}
// }

// export class Rating {
//   name


//   constructor(name: string) {
//     this.name = name;
//   }
// }

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  Lessons: Lesson[];
  searchValue: string;
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('/src/assets/dataLessons.json')
    .subscribe((result: Lesson[]) => {
      this.Lessons = result;
    });
  }

  // lessons: Lesson[] = [];

  // lesson: Lesson = new Lesson(
  //   'number', 'date', 
  // ); 

  // rating
  // students: Rating[] = [new Rating = ('Invanov', 'Petrov', 'Sidorov')]


  
  // this.lessons = JSON.parse(localStorage.getItem('lesson')).map(this.lesson);


  // getLesson() {
  //   let lesson = new Lesson(this.lesson.name, ...);
  //   this.lessons.push(lesson);
  //   this.lessons = JSON.parse(localStorage.getItem('lesson')).map(this.lesson);
  // }

  // getRating() {
  //   // for()
  //   int rate = Math.floor(...);

  // }

}
