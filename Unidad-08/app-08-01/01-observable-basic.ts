import { from } from 'rxjs';

const myObs = from("Hello world");

myObs.subscribe(char => console.log(char));