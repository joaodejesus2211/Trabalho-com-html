// Altera o texto do parágrafo inicíal
function alterarTexto() {
    document.getElementById("text").innerText = "Ao clicar, mudei!!";
}

//Adiciona um novo parágrafo ao final do corpo
function adiconarParágrafo(){
    const novoParagrafo = document.createElement("p")
    novoParagrafo.innerText = "Depois que você clicou, eu apareci 😊 !!";
    document.body.appendChild(novoParagrafo);
}

//Remover o último parágrafo, se houver mais de um
function removerParagrafo(){
    const paragrafos = documet.querySelectorall("p");
    if (paragrafos.lengeth >1){
        paragrafos[paragrafo.length - 1].remove();
    } else {
        alert("Não há mais parǵrafos para mover 😥 !!");
    }
}

//Mudar a cor de fundo da página para uma cor aleatória 
function mudarCorFundo(){
    const corAleatoria = `#${Math.floor(Math.random()*1677)}`
}