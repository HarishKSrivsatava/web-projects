const heading = document.querySelector('h1')
heading.textContent = 'Hello World'

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google-identity.jpg') {
      myImage.setAttribute('src','images/html5-css-javascript-logos.webp');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}