import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from 'ngx-jaka';

@Component({
  selector: 'js-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() isVisible: boolean;
  @Output() isVisibleChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private storage: StorageService) { }

  changeIsVisible(): void {
    this.isVisible = !this.isVisible;
    this.storage.setToStorage('sidebarVisible', JSON.stringify(this.isVisible));
    this.isVisibleChange.emit(this.isVisible);
  }

}
