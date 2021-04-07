import { appendGif, clearGifWrapper, saveGifData, clearGifData, getGifData } from './utils.js';
import { phoneNumberProcess } from './phone-utils.js';

const gifForm = document.getElementById('gifForm');
const gifButton = document.getElementById('gifButton');
const textForm = document.getElementById('textForm');
const textButton = document.getElementById('textButton');
const resetButton = document.getElementById('reset')

textButton.disabled = true;

gifButton.addEventListener('click', (e) => {
    e.preventDefault();

    const fd = new FormData(gifForm);
    const query = fd.get('gifInput');

    clearGifData();
    clearGifWrapper();

    fetch(`/gifs/random/${query}`)
        .then((res) => res.json())
        .then((gif) => {
            saveGifData(gif)
            appendGif(gif)
        })
        .then(textButton.disabled = false)
})

textButton.addEventListener('click', (e) => {
    e.preventDefault();

    const fd = new FormData(textForm);
    const number = fd.get('textInput');

    const gif = getGifData();

    fetch(`/secrets/${number}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gif_url: gif.images.downsized.url}),
    })  
        .then(phoneNumberProcess())
        .then((res) => res.json());
})

resetButton.addEventListener('click', (e) => {
    e.preventDefault();

    gifForm.reset();
    textForm.reset();
    clearGifWrapper();
    textButton.disabled = true;
})