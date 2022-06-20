let cards = document.getElementsByClassName('cards_blank');

// game state to check how many cards we have selected
let state = 0;

for(let i = 0; i < cards.length; i++) {

    let card = cards[i];

    card.addEventListener('click', () => {
        
        
        // if state is 2 then the cards should be checked
        if(state == 2) {

            // check if cards match

            //   if else class match 
           
            // if they dont match flip them.

            $('.active').removeClass('active');

            state = 0;
        } else {
            card.classList.toggle('active');
            state++;
        } 
        
       console.log(state)
        
    });
}
