const cardsColor = ['red', 'red', 'rubeccapurple','rubeccapurple','seagreen','seagreen','skyblue','skyblue','teal','teal','yellow','yellow','violet','violet','orange','orange','green', 'green'];

let cards = [...document.querySelectorAll('div')];


const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2;

let gameResult = 0;



function clickCard() {

  activeCard = this;
  if(activeCards[0] === activeCard) return  
  activeCard.classList.remove('hidden')
  //po pierwszym kliknięciu
  if(activeCards.length === 0){
        activeCards[0] = activeCard;
        return
    //po drugim kliknięciu    
  } else {
      
      cards.forEach(el => el.removeEventListener('click', clickCard))
      activeCards[1] = activeCard;
      setTimeout(()=>{
          //dwie te same karty
        if (activeCards[0].className === activeCards[1].className){
            activeCards.forEach(el => el.classList.add('off'))
            cards = cards.filter(el => !el.classList.contains('off'))
            gameResult++;
            if(gameResult === gamePairs){
                const endTime = new Date().getTime()
                const gameTime = (endTime - startTime)/1000;
                alert('Wygrałeś w czasie: ' + gameTime.toFixed(2) + ' sekund')
                location.reload();
             }  

          //dwie rozne karty
        } else {
            activeCards.forEach(el => el.classList.add('hidden'))
        }
        activeCards.length = 0;
        activeCard = '';
        
        cards.forEach(el => el.addEventListener('click', clickCard))
      },800)
  }
}


const init = () =>{

    cards.forEach(el => {
        const index = Math.floor(Math.random() * cardsColor.length);
        el.classList.add(cardsColor[index]);
        cardsColor.splice(index, 1);
    })
// ukrywanie elementów
    setTimeout(() => {
        cards.forEach(el => {
            el.classList.add('hidden'); 
            el.addEventListener('click', clickCard) 
        })
    }, 2000)

}

init();

    