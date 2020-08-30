import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  // event property binding for search button
  @Output() emitSearch = new EventEmitter<any>()

  searchTerm: string;
  constructor() { }

  search() {
    this.emitSearch.emit(this.searchTerm)    
  }
  
  ngOnInit() {
  }

}
