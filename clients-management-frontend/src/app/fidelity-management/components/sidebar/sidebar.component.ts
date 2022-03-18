import { Component, Input, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

const SMALL_WIDTH_BK = 720;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
  ];

  @Input()
  public isScreenSmall?: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BK}px`])
      .subscribe((state: BreakpointState) => {
        console.log(state.matches);
        this.isScreenSmall = state.matches;
      });
    //observe([Breakpoints.XSmall, Breakpoints.Small]);
  }
}
