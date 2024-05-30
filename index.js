var randomNumber1 = 1 + Math.floor(6 * Math.random()); //numberGenerate
var imge1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", imge1);

var randomNumber2 = 1 + Math.floor(6 * Math.random()); //numberGenerate
var imge2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", imge2);

winner(randomNumber1,randomNumber2);

function winner(randomNumber1, randomNumber2){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent = "🚩Player 1 Wins";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw";
    }
}
