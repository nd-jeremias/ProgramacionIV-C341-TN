import { Component, inject, OnInit } from '@angular/core';
import { Http } from '../../services/http';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil implements OnInit {
  gitHubService = inject(Http)

  ngOnInit(){
    this.gitHubService.getGithubUser();
    
  }

  showUser(){
    console.log(this.gitHubService.getGithubUser())
  }
}
