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


const GIF = 'gifData';
const emptyData = {};

export function saveGifData(gifData) {
    let stringGifData = JSON.stringify(gifData);

    localStorage.setItem(GIF, stringGifData);
}

export function clearGifData() {
    const stringEmptyData = JSON.stringify(emptyData);

    localStorage.setItem(GIF, stringEmptyData);
}

export function getGifData() {
    let stringGifData = localStorage.getItem(GIF);
    let parsedGifData = JSON.parse(stringGifData);
    
    return parsedGifData;
}
