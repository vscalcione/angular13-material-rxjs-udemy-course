import { Component, OnInit } from '@angular/core';
import { distinct, from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  clients = [
    { name: 'Nicola', fidelityCode: 67500123, active: false },
    { name: 'Marco', fidelityCode: 67500150, active: true },
    { name: 'Nicola', fidelityCode: 67500226, active: false },
    { name: 'Federico', fidelityCode: 67500175, active: true },
    { name: 'Luigi', fidelityCode: 67500175, active: false },
  ];

  constructor() {}

  ngOnInit(): void {
    this.createObservable();
  }

  createObservable(): void {
    const observable = of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);

    console.log('Observable without duplicates');
    observable.pipe(distinct()).subscribe((value) => console.log(value));

    console.log('Observable with duplicates');
    observable.subscribe((value) => console.log(value));

    const elements = Observable.create(function (observer: any) {
      observer.next('First element');
      observer.next('Second element');
      observer.complete();
    });

    const subscribe = elements.subscribe((value: any) => console.log(value));

    from(this.clients)
      .pipe(distinct((a) => a.name))
      .subscribe(console.log);
  }
}
