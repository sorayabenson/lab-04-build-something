const gifWrapper = document.getElementById('gifWrapper');
const textSentWrapper = document.getElementById('textSent');

export function textSent(number) {
    const p = document.createElement('p')
    p.textContent = `Yay, your gif to ${number} has been sent!`;

    textSentWrapper.append(p);
}

export function appendGif(gif) {
    const iframe = document.createElement('iframe');
    iframe.src = `${gif.embed_url}`;

    gifWrapper.append(iframe);
}

export function clearGifWrapper() {
    gifWrapper.innerHTML = '';
}


const gifKey = 'gifData';
const emptyData = {};

export function saveGifData(gifData) {
    const stringGifData = JSON.stringify(gifData);

    localStorage.setItem(gifKey, stringGifData);
}

export function clearGifData() {
    const stringEmptyData = JSON.stringify(emptyData);

    localStorage.setItem(gifKey, stringEmptyData);
}

export function getGifData() {
    const stringGifData = localStorage.getItem(gifKey);
    const parsedGifData = JSON.parse(stringGifData);
    
    return parsedGifData;
}
