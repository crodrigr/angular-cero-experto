import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const myObs = from("Hello world");

const filteredObs = myObs.pipe(
  filter(char => char !== ' '),
  map(char => char.toUpperCase())
);

filteredObs.subscribe({
  next: (char) => console.log(char),
  complete: () => console.log("Completado")
});
