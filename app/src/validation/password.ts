
const inputPass = document.getElementById('password') as HTMLElement;



inputPass.addEventListener("change", validatePass);


function validatePass(){

    const pass = document.querySelector('#password') as HTMLInputElement;
    var erroPass = document.querySelector("#erroPass") as HTMLElement;
    var erroInvalidpass = document.querySelector("#erroInvalidpass") as HTMLElement;

    var expression = /^[0-9a-zA-Z$*&@#]{6,}$/;
    var regex = new RegExp(expression);
    

    if(pass.value == ''){
        pass.classList.add("errorInput")
        erroPass.classList.remove("invisible")
        erroInvalidpass.classList.add("invisible")

    }else{
        pass.classList.remove("errorInput")

        if (pass.value.match(regex)) {
            pass.classList.remove("errorInput")
            erroInvalidpass.classList.add("invisible")
            
        } else {
            pass.classList.add("errorInput")
            erroInvalidpass.classList.remove("invisible")
        }
        erroPass.classList.add("invisible")
    }
}





