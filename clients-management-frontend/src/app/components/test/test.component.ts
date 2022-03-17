import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createObservable();
  }

  createObservable(): void {
    const observable = of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
    observable.subscribe((value) => console.log(value));

    const elements = Observable.create(function (observer: any) {
      observer.next('First element');
      observer.next('Second element');
      observer.complete();
    });

    const subscribe = elements.subscribe((value: any) => console.log(value));
  }
}
