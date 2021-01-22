import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuState', [
      state('show', style({
        display: 'block', opacity: 1, zIndex: 8
      })),
      state('hide', style({
        display: 'none', opacity: 0, zIndex: 0
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ]),
		trigger('top', [
      state('show', style({
        transform: 'translateY(-100%) rotate(45deg)', transformOrigin: '5px 0px', width: '137.8%'
      })),
      state('hide', style({
        transform: 'translateY(0)'
      })),
      transition('show => hide', animate('200ms')),
      transition('hide => show', animate('200ms'))
    ]),
		trigger('middle', [
      state('show', style({
        opacity: '0'
      })),
      state('hide', style({
        opacity: '1'
      })),
      transition('show => hide', animate('800ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ]),
		trigger('bottom', [
      state('show', style({
        transform: 'translateY(100%) rotate(-45deg)', transformOrigin: '0px 0px', width: '137.8%'
      })),
      state('hide', style({
        transform: 'translateY(0)'
      })),
      transition('show => hide', animate('200ms')),
      transition('hide => show', animate('200ms'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  show = false;

  constructor() { }

  get viewMenu() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
