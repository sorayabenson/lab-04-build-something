// import { sendSms } from '../lib/utils/twilio.js';

const gifForm = document.getElementById('gifForm');
const gifButton = document.getElementById('gifButton');
const gifWrapper = document.getElementById('gifWrapper');
const textForm = document.getElementById('textForm');
const textButton = document.getElementById('textButton')

const appendGif = (gif) => {
    const iframe = document.createElement('iframe');
    iframe.src = `${gif.embed_url}`;

    gifWrapper.append(iframe);
}

const clearGifWrapper = () => {
    gifWrapper.innerHTML = '';
}

gifButton.addEventListener('click', (event) => {
    event.preventDefault();

    const fd = new FormData(gifForm);
    const query = fd.get('gifInput');

    fetch(`/gifs/random/${query}`)
        .then((res) => res.json())
        .then(clearGifWrapper())
        .then((gif) => {
            appendGif(gif);
        })
})

textForm.addEventListener('submit', () => {
    console.log(textInput.value);

    //sendsSms sends gif in gifWrapper
    // to: textInput.value
    // body: gif
    //how do I disable the send button without gif or number?
    //how do i set the parameters of the number input?
})