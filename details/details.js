import { fetchCake } from '../fetch-utils.js';
import { renderCakeDetail } from '../render-utils.js';

const cakeDetailEl = document.getElementById('cake-detail-container');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const cake = await fetchCake(id);

    const cakeEl = renderCakeDetail(cake);
    cakeDetailEl.append(cakeEl);

});