import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const myObs = from("Hello world");

const filteredObs = myObs.pipe(
  filter(char => char !== ' ')
);

const subscription = filteredObs.subscribe(char => {
  console.log(char);
  if (char === 'e') {
    subscription.unsubscribe();
  }
});