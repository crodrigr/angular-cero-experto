import { from, of } from 'rxjs';
import { concatMap, delay, filter, map } from 'rxjs/operators';

const myObs = from("Hello world");

const animatedObs = myObs.pipe(
  concatMap(char => of(char).pipe(delay(1000))),
  filter(char => char !== ' '),
  map(char => char.toUpperCase())
);

animatedObs.subscribe(char => console.log(char));