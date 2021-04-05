// import { sendSms } from '../lib/utils/twilio.js';

const gifForm = document.getElementById('gifForm');
const gifInput = document.getElementById('gifInput');
const gifButton = document.getElementById('gifButton');
const gifWrapper = document.getElementById('gifWrapper');
const textForm = document.getElementById('textForm');
const textInput = document.getElementById('textInput');
const textButton = document.getElementById('textButton')

gifForm.addEventListener('submit', () => {
    console.log(gifInput.value);

    //get random endpoint
    //gifInput.value is the query
    //appends gifWrapper with result
})

textForm.addEventListener('submit', () => {
    console.log(textInput.value);

    //sendsSms sends gif in gifWrapper
    // to: textInput.value
    // body: gif
    //how do I disable the send button without gif or number?
})