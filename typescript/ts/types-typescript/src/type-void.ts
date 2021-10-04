// Void

//Tipo explicito
function showInfo(user: any): any {
    console.log("User Info", user.id, user.username, user.firstName);
    //return "hola";
}

showInfo({id: 1, username: "camilla-bachna", firstName: "Camilla"});

//Tipo inferido function showFormattedInfo(user: any): void
function showFormattedInfo(user: any){
    console.log("User Info", `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
    `)
}

showFormattedInfo({id: 1, username: "camilla-bachna", firstName: "Camilla"});

/* User Info 
    id: 1
    username: camilla-bachna
    firstName: Camilla */

//tipo void, como tipo de dato en variable
let unusable: void;
//unusable = null; //Type 'null' is not assignable to type 'void'.
unusable = undefined;


//Tipo: Never 
function handleError(code: number, message: string): never{
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
};

//like this the function handles an error correctly and never returns a value
try{
handleError(404, "Not found");
} catch(error){}


function sumNumbers(limit: number): never{
    let sum = 0;
    while(true){
        sum++;
    }
    //return sum; 
}

sumNumbers(10);
//infinite cycle, program never stops, the terminal is blocked