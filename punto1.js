const imagen = document.getElementById("LwT");
let bordeActivo = false;

function ActivarBorde() {
    if (bordeActivo) {
        imagen.style.border = "none"; // es la condición
        bordeActivo = false; // es el nuevo estado dada la condición
    } 
    
    else {
        imagen.style.border = "2px solid red"; // es la condición
        bordeActivo = true; // es el nuevo estado dada la condición
    }
    // de esta forma, va alternando entre el estado true y el estado false con sus respectivas condiciones
}

imagen.addEventListener("click", ActivarBorde);