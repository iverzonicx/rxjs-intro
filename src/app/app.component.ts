import { Component, OnInit } from '@angular/core';
import { of, filter, find, map, tap, take, takeUntil, takeWhile, fromEvent, interval, skip, skipWhile, skipUntil, concatMap, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'rxjs-intro';

  ngOnInit(): void {

    // of(1, 2, 3, 4, 5).subscribe(data => console.log(data))

    // of(1, 2, 3, 4, 5).pipe(
    //   filter(x => x > 3)
    // ).subscribe(data => console.log(data))

    // of(1, 2, 3, 4, 5).pipe(
    //   find(x => x > 3)
    // ).subscribe(data => console.log(data))

    // of(1, 2, 3, 4, 5).pipe(
    //   map(x => x * 10)
    // ).subscribe(data => console.log(data))

    // of(1, 2, 3, 4, 5).pipe(
    //   tap(x => console.log(x*10)),
    //   tap(console.log),
    // ).subscribe()

    // of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    //   filter(x => x >= 3),
    //   take(5),
    //   map(x => x * 20)
    // ).subscribe(data => console.log(data))

    // of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    //   takeWhile(x => x <= 2)
    // ).subscribe(data => console.log(data))

    // const frv = fromEvent(document, 'click')
    // interval(1000).pipe(
    //   takeUntil(frv)
    // ).subscribe(data => console.log(data))

    // of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    //     skip(3)
    //   ).subscribe(data => console.log(data))

    // of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    //     skipWhile(x => x <= 5)
    //   ).subscribe(data => console.log(data))

    // const frv = fromEvent(document, 'click')
    // interval(1000).pipe(
    //     skipUntil(frv)
    //   ).subscribe(data => console.log(data))

    const obs1 = of(1, 2, 3, 4, 5)
    const obs2 = of(6, 7, 8, 9, 10)
    const obs3 = of(11, 12, 13, 14, 15)

    // obs1.pipe(
    //   concatMap(x => obs2.pipe(
    //       map(y => x*y)
    //     )
    //   )
    // ).subscribe(data => console.log(data))

    // forkJoin([obs3, obs2, obs1]).subscribe(data => console.log(data))

  }



}
