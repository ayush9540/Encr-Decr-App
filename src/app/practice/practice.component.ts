import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  names = [];
  bulbon =false;
  constructor() { }

  ngOnInit() {
  }

  changemode() {
    this.bulbon = this.bulbon? false:true;
  }
  onAddNew() {
    this.names.push('hi');
  }
  onremove(id: number) {
    var position = id + 1;
    this.names.splice(position, 1);
  }
}