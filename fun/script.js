const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");

btnSim.addEventListener("click", aceitar);
btnNao.addEventListener("mouseover", desviar);
btnNao.addEventListener("click", desviar);

function aceitar(){
    alert("Você aceitou namorar comigo :>");
    location.href = "https://www.youtube.com/shorts/X0hUMlgLQEY?feature=share";
}

function desviar(){
    btnSim.style.position = "absolute";
    btnNao.style.bottom = geraPosicao(10, 90);
    btnNao.style.left = geraPosicao(10, 90);

    console.log("Opa, desviei...");
}


function geraPosicao(min, max){
    return (Math.random() * (max-min) + min) + "%";
}