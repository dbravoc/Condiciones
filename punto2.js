function calcularCantidad() {
    const LwTCantidad = parseInt(document.getElementById("LwT").value) || 0;
    const IGCantidad = parseInt(document.getElementById("IG").value) || 0;
    const LinkedinCantidad = parseInt(document.getElementById("Linkedin").value) || 0;

    const totalStickers = LwTCantidad + IGCantidad + LinkedinCantidad;

    const resultadoP = document.getElementById("resultado");

    if (totalStickers <= 10) {
        resultadoP.textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        resultadoP.textContent = "Llevas demasiados stickers.";
    }
}
