class Singleton{
    // Singleton has 3 properties/methods:
private static instance: Singleton; //type Singleton, its the same class

//its constructor is private:
private constructor(){
   //init 
   //internally could initialize private / public properties
}

//to obtain the instance, its a static method
/* static methods: allow us to access them 
without the need to instantiate the class they belong to */
static getInstance(){
    //the first time it does not exist, so it needs to be created
    //afterwards we always need to return the same instance
if (!Singleton.instance){
    Singleton.instance = new Singleton();
}
return Singleton.instance;
}
}

export default Singleton;