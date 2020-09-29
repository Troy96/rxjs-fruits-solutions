const { EMPTY } = require('rxjs');


// LEVEL: 1: subscribe

// Welcome to RxJS-fruits, where you write JavaScript / TypeScript code to mix your fruit juice!

// The basis of Reactive Extensions is the Observable. It is a counterpart of an array. Instead of that Retaining data it streams the data to interested subscribers. (

// An Observable is therefore only active if it is subscribed to with the subscribe-function. 

// Recipe - 
// In the source code we have an empty Observable with no data to expect.
// Move the conveyor belt, by subscribing to the empty observable with the subscribe function and click on the start button.

const conveyorBelt = EMPTY;

conveyorBelt.subscribe();

