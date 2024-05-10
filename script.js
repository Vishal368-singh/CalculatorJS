let string = " ";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML =='='){
            string = eval(string)    //to evalute the string, it's pre-defined function
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='AC'){
            string = ""    //to clear the string
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == '❎'){
            string =string.slice(0, string.length - 1);    //to clear the string
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;//to take input and print on input box
            document.querySelector('input').value=string;
        }
    })})