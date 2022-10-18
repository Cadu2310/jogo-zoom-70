let gameBoard = document.querySelector(".game-board");
let dino = document.querySelector(".Dino");
let saveDino = document.querySelector(".saveDino")
let jipe = document.querySelector(".jipe");
let carro = document.querySelector(".carro");
let carro2 = document.querySelector(".carro2");
let score = document.querySelector(".score");
let gameOver = document.querySelector(".gameOver");
let inicio = document.querySelector(".inicio");
let btn = document.querySelector(".btn ");




// declarando a veriável para o score
let interval = null;
let playerScore = 0;


// função para o score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`
}

// start game
window.addEventListener ("keydown", (start) =>{

    console.log(start);
    if(start.code == "Enter"){
        inicio.style.display = "none";
        btn.style.display = "none";
        gameOver.style.display = "none";
        saveDino.classList.add("tituloAnimation");
        jipe.classList.add("jipeAtivo");
        carro.classList.add("carroAtivo");
        carro2.classList.add("carro2Ativo");
        

        let playerScore = 0;
        interval = setInterval(scoreCounter, 500);
    }
});

// jump
window.addEventListener("keydown", (e) =>{
    // console.log(e);
    if(e.key == "ArrowUp")
        if(dino.classList != "Dinoativo"){
            dino.classList.add("Dinoativo");

            // remover classe depois de 0.5 segundos
            setTimeout(()=>{
                dino.classList.remove("Dinoativo");
            }, 500)
        }
    
});
    


// 'Game Over' if 'Dino' bater na 'Plataforma'
let result = setInterval(()=>{

    if(playerScore == 100){
            
        inicio.style.display = "none";
        gameOver.style.display = "none";
        btn.style.display = "block";
        saveDino.classList.remove("tituloAnimation");
        jipe.classList.remove("jipeAtivo");
        
    }

    // let jipeLeft = parseInt(getComputedStyle(jipe).getPropertyValue("left"));
    // console.log("plataformaLeft" + plataformaLeft);

    let jipePosition = jipe.offsetLeft;
    console.log(jipePosition);

    let dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');
    console.log(dinoPosition);

    if(jipePosition <= 170 && jipePosition > 50 && dinoPosition < -130){

        // console.log("Game Over");
        gameOver.style.display = "block";
        jipe.classList.remove("jipeAtivo");
        carro.classList.remove("carroAtivo");
        carro2.classList.remove("carro2Ativo");
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
