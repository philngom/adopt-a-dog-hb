import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

window.addEventListener('load', async() => {
    const dogs = await getDogs();
    for (let dog of dogs) {
        console.log(dog);
        let dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
});
// on load
// fetch all dogs
// render and append all dog cards to the container
