/* How event loop works */

/* both browser and node js are always running a single threaded event loop to run your code.
On the fist go around it will run all you synchronous code, 
but it might also queue up asynchronous events to be called back later */

// L1
console.log(`Synchronous 1`);

// L2
//if it is a macrotask like a setTimeout or setInterval it will be executed on the next event loop
// 0 time delay
setTimeout((_) => console.log(`Timeout 2`), 0);

// L3
//but if it is a microtask like a fulfilled promise then it will be called back before the start of the next event loop
//resolves right away
Promise.resolve().then((_) => console.log(`Promise 3`));

// L4
console.log(`Synchronous 4`);

/* This is the order it will appear: nothing has an actual time delay, 
however each line of code will NOT be executed one by one 

L1: (gets logged up right away, because it is running on the main thread)

L2: (its being queued for a future task - macrotask)

L3: (the promise is queued to run in the microtask queue immediately after this current task. 
    So even if the setTimeout was queued up before the promise, the promise still gets executed first, 
    because of the priority of the microtask queue)

L4: (gets executed right away, its running on the main thread)

=>

Synchronous 1 
Synchronous 4 
Promise 3
Timeout 2 

*/
