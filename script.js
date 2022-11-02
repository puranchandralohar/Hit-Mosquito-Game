let mosquito = document.querySelector(".mosquito")


function flyMosquito(){
    setInterval(()=>{
        let moveX = Math.floor(Math.random()*300);
        let moveY = Math.floor(Math.random()*700);
        console.log(moveX,moveY);
        mosquito.style.top= `${moveX}px`;
        mosquito.style.left= `${moveY}px`;
    },1000)
}



mosquito.addEventListener('click',()=>{
    flyMosquito()
   
})