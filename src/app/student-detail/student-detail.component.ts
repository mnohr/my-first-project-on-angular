import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { 
    setTimeout(()=>{
      this.title = "changed titile student";
    }, 2000);
  }

  ngOnInit() {
  }

  title = 'student-details:)';

}


