

let input = document.getElementById('inputBox');   /* The user input is taken by getElementById*/
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);  /*The array for all the buttons for calculation */

/* Array for each button */

arr.forEach(button => {  
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
