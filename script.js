const numero = document.getElementById("numero");
const boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    let valor = parseInt(numero.innerHTML);
    numero.innerHTML=valor+1;
});