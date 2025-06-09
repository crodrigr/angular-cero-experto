import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const myObs = from("Hello world");

const filteredObs = myObs.pipe(
  filter(char => char !== ' ')
);

filteredObs.subscribe(char => console.log(char));