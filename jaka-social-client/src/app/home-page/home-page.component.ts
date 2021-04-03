import { Component, OnInit } from '@angular/core';
import { StorageService } from 'ngx-jaka';

@Component({
  selector: 'js-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isVisible: boolean = false;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.isVisible = JSON.parse(this.storage.getFromStorage('sidebarVisible'));
  }

}
