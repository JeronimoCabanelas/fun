const btnSim = document.getElementById("btnSim")
const btnNao = document.getElementById("btnNao")

function aceitar(){
    alert("Você aceitou namorar comigo :>")
    location.href = "https://www.youtube.com/shorts/X0hUMlgLQEY?feature=share"
}

function desviar(){
    btnNao.style.position = "absolute";

}


function geraPosicao(min, max){
    return (Math.random() * (max-min) + min) + "%";
}