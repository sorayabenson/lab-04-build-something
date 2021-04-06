// import { sendSms } from './twilio-utils.js';
import { appendGif, clearGifWrapper, textSent, saveGifData, clearGifData, getGifData } from './utils.js';

const gifForm = document.getElementById('gifForm');
const gifButton = document.getElementById('gifButton');
const textForm = document.getElementById('textForm');
const textButton = document.getElementById('textButton');

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
        .then(textSent(number))
        .then((res) => res.json());


    //sendsSms sends gif in gifWrapper
    // to: textInput.value
    // body: gif
    //how do I disable the send button without gif or number?
    //how do i set the parameters of the number input?
})