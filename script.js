let mosquito = document.querySelector(".mosquito")
let gameStart = document.querySelector('.game_start')
let result = document.querySelector(".result");


let score = 0;
let isGameStart = false;

gameStart.addEventListener("click",()=>{
    isGameStart = true;
    flyMosquito()
})


function flyMosquito(){
    let time = setInterval(()=>{
        let moveX = Math.floor(Math.random()*300);
        let moveY = Math.floor(Math.random()*700);
        console.log(moveX,moveY);
        mosquito.style.top= `${moveX}px`;
        mosquito.style.left= `${moveY}px`;
    },1100)

   setTimeout(()=>{
    clearTimeout(time)
    alert("Time up! Your Score is " + score)
    score=0;
    result.innerText = score;
    isGameStart=false;
   },30000)


}


function getScore(){
    score ++;
    result.innerText = score;

}

mosquito.addEventListener('click',()=>{ 
    if(isGameStart){
        getScore()
    }   
})