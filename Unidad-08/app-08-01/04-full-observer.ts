import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const myObs = from("Hello world");

const filteredObs = myObs.pipe(
  filter(char => char !== ' ')
);

const observer = {
  next: (val: string) => console.log(val),
  error: (err: any) => console.error('Error:', err),
  complete: () => console.log('Completado')
};

filteredObs.subscribe(observer);