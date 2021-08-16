//we pretend that there is a class called Singleton
import Singleton from "./Singleton"

// we will demonstrate that singleton only exposes a single instance
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log("A is equal to B", a === b); //A is equal to B true
//that means that a is the same instance as b