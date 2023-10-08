function verificarPassword() {
    const A = document.getElementById("A").value;
    const B = document.getElementById("B").value;
    const C = document.getElementById("C").value;
    const resultadoQ = document.getElementById("resultado_pass");
    const password = A + B + C;

    if (password === "911") {
        resultadoQ.textContent = "Password 1 correcto";
    } else if (password === "714") {
        resultadoQ.textContent = "Password 2 correcto";
    } else {
        resultadoQ.textContent = "Password incorrecto";
    }
}
