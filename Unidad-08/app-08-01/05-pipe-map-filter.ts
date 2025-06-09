import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const myObs = from("Hello world");

const filteredObs = myObs.pipe(
  filter(char => char !== ' '),
  map(char => char.toUpperCase())
);

filteredObs.subscribe(char => console.log(char));