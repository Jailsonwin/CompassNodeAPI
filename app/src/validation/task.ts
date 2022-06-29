const inputDesc = document.getElementById('description') as HTMLElement;
const inputTime = document.getElementById('time') as HTMLElement;

inputTime.addEventListener("change", validateTime);
inputDesc.addEventListener("change", validateDesc);



function validateDesc(){
    const description = document.querySelector('#description') as HTMLInputElement;
    var erroDescription = document.querySelector("#erroDescription") as HTMLElement;

    if(description.value == ''){
        description.classList.add("errorInput")
        erroDescription.classList.remove("invisible")
    }else{
        description.classList.remove("errorInput")
        erroDescription.classList.add("invisible")
    }
}


function validateTime(){

    const time = document.querySelector('#time') as HTMLInputElement;
    var erroTime = document.querySelector("#erroTime") as HTMLElement;

    if(time.value == ''){
        time.classList.add("errorInput")
        erroTime.classList.remove("invisible")
    }else{
        time.classList.remove("errorInput")
        erroTime.classList.add("invisible")
    }
}
