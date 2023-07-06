const imgarr = [`images/dice1.png`, `images/dice2.png`,`images/dice3.png`,`images/dice4.png`,`images/dice5.png`,`images/dice6.png`]
let randnum1 = Math.floor(Math.random() * 6)+1;
let randnum2= Math.floor(Math.random() * 6)+1; 
let randimg1 = imgarr[randnum1]
let randimg2 = imgarr[randnum2]
document.querySelector('.btn1').addEventListener('click', ()=>{
    let img=document.querySelector('.img1')
    img.src=randimg1
})
document.querySelector('.btn2').addEventListener('click', ()=>{
    let img=document.querySelector('.img2')
    img.src=randimg2
    randresult()
})
function randresult(){
    if (randnum1 > randnum2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins! Reload!!";
      }
      else if (randnum2 > randnum1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩 Reload!!";
      }
      else {
        document.querySelector("h1").innerHTML = "Draw!";
      }    
}
  
