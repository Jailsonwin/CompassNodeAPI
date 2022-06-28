const inputAge = document.getElementById('birthdate') as HTMLElement;


inputAge.addEventListener("change", validateAge);

function validateAge() {

    const birthdate = document.querySelector('#birthdate') as HTMLInputElement;
    var erroAge = document.querySelector("#erroAge") as HTMLElement;
    var erroInvalidage = document.querySelector("#erroInvalidage") as HTMLElement;

    let date = document.getElementById('birthdate') as HTMLInputElement;

    let birth = `${date.value.split("-")[0]}-${date.value.split("-")[1]}-${date.value.split("-")[2]}`;
    let Ndate = new Date(birth);
    let diff = Date.now() - Ndate.getTime();
    let NNdate = new Date(diff);
    let fullY = NNdate.getUTCFullYear();
    let age = Math.abs(fullY - 1970);
    if(date.value == "") {

        birthdate.classList.add("errorInput")
        erroAge.classList.remove("invisible")
        erroInvalidage.classList.add("invisible")
    }else {
        birthdate.classList.remove("errorInput")
        if (age < 18) {
            
            birthdate.classList.add("errorInput")
            erroInvalidage.classList.remove("invisible")
            
        } else {
            birthdate.classList.remove("errorInput")
            erroInvalidage.classList.add("invisible")
        }
        erroAge.classList.add("invisible")
    }
    
}





