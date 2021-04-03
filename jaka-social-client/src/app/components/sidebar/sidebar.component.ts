import { Component, OnInit } from '@angular/core';

export interface SidebarLink {
  label: string,
  link: string
}

@Component({
  selector: 'js-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarLinks: SidebarLink[] = [
    { label: 'Latest posts', link: '/home/latest' },
    { label: 'Trending posts', link: '/home/trending' },
    { label: 'My posts', link: '/home/posts' },
    { label: 'Settings', link: '/home/settings' },
    { label: 'Profile', link: '/home/profile' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
