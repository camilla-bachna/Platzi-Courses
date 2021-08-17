//open / closed principle: 
//classes should be closed for modification, but open to be extended

class Field{
    errors : string[]
    input: HTMLInputElement

//will represent any input
    constructor(input:HTMLInputElement){
        this.input=input
        this.errors=[]

        let errorMessage = document.createElement('p')
        errorMessage.className='text-danger'
        this.input.parentNode.insertBefore(errorMessage,this.input.nextSibling)

        //everytime the value of this input changes we validate
        //if the function validate() produces an error will add in array error
        //and in case it exists at least 1 error we will add in errorMessage
        //at the beginning there is no error, because the validation only ocurrs when we start to change to content of input field value
        this.input.addEventListener('input',()=>{
            this.errors=[]
            this.validate()
            errorMessage.innerText=this.errors[0]||''
        })
    }
    validate(){}
}

//has to return this field
function RequiredFieldDecorator(field:Field): Field{
    //safe validation of original function
    let validate = field.validate;
    //we want a copy because we want to extend the original one
    field.validate = function(){
        //super important: first thing we have to do in this function is validate()
        //this decorator does not know what happened before
        //could be that another decorator used this technique 
        validate()
        let value = field.input.value;
        //if you write your email and delete it => says "required" => if value does not exist
        if(!value){
            field.errors.push("required")
        }
    }
    
    return field;
}

// we also have to make sure that the user input is an email
function EmailFieldDecorator(field:Field): Field{

    let validate = field.validate;
    field.validate = function(){
        validate()
        let value = field.input.value;
        //if there is a character or string inside of value
        if(value.indexOf("@") === -1){ // indexOf could not find this character
            //In JS ~ is used to say that something is different from -1.
            //if(~value.indexOf('@')) {...}
            field.errors.push("Has to be an email address")
        }
    }
    
    return field;
}

//instance of field
let field = new Field(document.querySelector('#email'));
//the following order is important: 
//we first validate if its required and afterwards if its an email
//if we write something without @ error message "has to be email"

//EmailFieldDecorator(RequiredFieldDecorator(field)) the function RequiredFieldDecorator will return field and afterwards we pass it to EmailFieldDecorator
//or one step at a time:
field = RequiredFieldDecorator(field);
//if we delete everything error message "required" 
field = EmailFieldDecorator(field);