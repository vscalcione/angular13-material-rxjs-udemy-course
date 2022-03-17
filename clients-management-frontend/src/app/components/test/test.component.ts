import { Component, OnInit } from '@angular/core';
import {
  concat,
  distinct,
  filter,
  first,
  from,
  interval,
  last,
  map,
  mapTo,
  merge,
  Observable,
  of,
  take,
  timer,
} from 'rxjs';

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

    console.log('Rxjs first operator');
    from(this.clients).pipe(first()).subscribe(console.log);

    console.log('Rxjs last operator');
    from(this.clients).pipe(last()).subscribe(console.log);

    console.log('Rxjs filter operator');
    from(this.clients)
      .pipe(
        filter((elements) => elements.active === false),
        map((elements) => elements.name)
      )
      .subscribe(console.log);

    console.log('Rxjs timer operator');
    const firstRequest = timer(3000).pipe(mapTo('First request....'));
    const secondRequest = timer(1000).pipe(mapTo('Second request...'));

    concat(firstRequest, secondRequest).subscribe((message: any) =>
      console.log(message)
    );

    console.log('Rxjs merge operator');
    const firstObservable = of(1, 2, 3);
    const secondObservable = of(4, 5, 6);
    const merged = merge(firstObservable, secondObservable).subscribe(
      (element) => console.log(element)
    );

    console.log('Use of getFramework method');
    const myFramework = this.getFramework()
      .pipe(map((name) => `${name} is the best framework`))
      .subscribe((result) => console.log(`${result}`));
  }

  getFramework(): Observable<String> {
    const frameworks = ['Angular', 'React.js', 'Vue.js'];
    return interval(2000).pipe(
      map((index) => frameworks[index]),
      take(3)
    );
  }
}
