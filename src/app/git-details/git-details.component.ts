import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Git-service/service.service'
import { Github } from '../github';

@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {

  githubs:Github[];

  constructor(public Gitservice: ServiceService) { }

  ngOnInit() {
    this.searchGit("sam2020-4");
  }  

  searchGit(searchTerm){
    this.Gitservice.searchGithub(searchTerm).then(
      ()=>{
        this.githubs=this.Gitservice.githubs;
        console.log(this.githubs);
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
