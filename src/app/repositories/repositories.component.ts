import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Git-service/service.service';
import {Github} from '../github';
import { Gitrepo } from '../gitrepo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  gitrepos:Gitrepo;

  constructor(public Gitservice: ServiceService) { }

  ngOnInit() {
    this.searchRepo("sam2020-4");
  }

  searchRepo(searchTerm){
    this.Gitservice.searchRepo(searchTerm).then(
      ()=>{
        this.gitrepos=this.Gitservice.gitrepos;
        console.log(this.gitrepos);

      },
      (error)=>{
        console.log(error)
      }
    )
    // console.log(searchTerm)
  }

}
