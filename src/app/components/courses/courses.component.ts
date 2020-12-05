import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title = 'Titles';

  courses = ['course 1 ', 'course 2 ', 'course 3 '];
  constructor() {}

  ngOnInit(): void {}
}
