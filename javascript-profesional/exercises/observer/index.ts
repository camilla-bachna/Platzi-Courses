/* we are simulating these types of subscriptions that occur between subjects and observers */

//interfaces - defines the exact form an object is supposed to have, cannot add more properties or have less
interface Observer{
    //the observers will receive actualization of information therefore we need the method update
    update: (data: any) => void
}

interface Subject{
    //is a function that receives an observer of type observer
    subscribe: (observer: Observer) => void
    //will not return anything
    //void the return type is undefined
    unsubscribe: (observer: Observer) => void
}

//create a concrete implementation
//will be the one that receives the change of the price
//and afterwards will inform subscribers
class BitcoinPrice implements Subject{
    //create list observers
observers: Observer[] = [];

constructor(){
    //input value will call notify
    const element: HTMLInputElement = document.querySelector("#value");
    //if value changes notify all observers
    element.addEventListener("input", () => {
       this.notify(element.value) 
    })
}
//a public class
    subscribe(observer: Observer){
        //has to add to a list (array) of subscribers called observers
        this.observers.push(observer)
    }
    unsubscribe(observer: Observer){
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })

        this.observers.splice(index, 1);
    }
//if the price changes have to notify all subscribers
    notify(data: any){
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private element: HTMLElement;
    constructor(){
        this.element = document.querySelector("#price");
    }
    //everytime update is called we want to change the value of price
update(data: any){
    this.element.innerText = data;
}
}

//create instances to be able to subscribe them
const value = new BitcoinPrice();
const display = new PriceDisplay();
value.subscribe(display);

//after 5s it is no longer connected
setTimeout(
    () => value.unsubscribe(display), 5000
);

/* The observer pattern is very useful when we have information that many elements or components of an application want to know about, 
for example when we have a global state and this global state changes, other components will also change. 
This is exactly the reason why we use Redux in React projects. */