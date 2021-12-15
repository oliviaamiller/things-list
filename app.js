// import functions and grab DOM elements
import { renderCakeCard } from './render-utils.js';
import { fetchCakes } from './fetch-utils.js';

const cakeCardsEl = document.getElementById('cakes-list-container');


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', async() => {
    const cakes = await fetchCakes();

    for (let cake of cakes) {
        const cakeEl = renderCakeCard(cake);

        cakeCardsEl.append(cakeEl);
    }
});
