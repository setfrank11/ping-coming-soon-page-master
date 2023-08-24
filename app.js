let inputEmail = document.getElementById('email');
let button = document.getElementById('button');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail(email){
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    
    if(expReg.test(email) == true){
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
    } else {
        inputEmail.style.border = '1px solid red';
        error.style.visibility = 'visible';
    }
    
}
