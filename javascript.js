let cards = document.getElementsByClassName('cards_blank');

// game state to check how many cards we have selected
let state = 0;
let images = [
    'nando_150.png',
    'jerbo_150.png',
    'luc_150.png',
    'merlijn_150.png',
    'paris_150.png',
    'robin_150.png',
    'vigo_150.png',
    'yorrick_150.png',
    'dennis_150.png',
    'nando_150.png',
    'jerbo_150.png',
    'luc_150.png',
    'merlijn_150.png',
    'paris_150.png',
    'robin_150.png',
    'vigo_150.png',
    'yorrick_150.png',
    'dennis_150.png',
]

for(let i = 0; i < cards.length; i++) {

    let card = cards[i];


    card.addEventListener('click', () => {
        
        
        // if state is 2 then the cards should be checked
        if(state == 2) {

            // check if cards match
            //   if else class match 
           
            // if they dont match flip them.
            $('.active').css({'background-image': ''});
            $('.active').removeClass('active');
           
            state = 0;
        } else {
            card.classList.toggle('active');
            card.style.backgroundImage = 'url(./media/' + images[i] + ')'
            state++;
        }

        if(state == 2) {
            let activeClasses = $('.active');
            if(activeClasses[0].style.backgroundImage == activeClasses[1].style.backgroundImage) {
                // puntentelling hier doen


                activeClasses[0].classList.remove('active');
                activeClasses[1].classList.remove('active');
            }
        }
        
    });
}
