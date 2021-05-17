import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '/index/home',
      icon: 'home'
    },
    {
      title: 'Compte',
      url: '/index/account',
      icon: 'cog'
    }
  ];
  public labels = ['Family', 'Friends'];

  constructor() { }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
