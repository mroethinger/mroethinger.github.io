let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Bild1.jpg') {
      myImage.setAttribute('src','images/Bild2.jpg');
    } else {
      myImage.setAttribute('src','images/Bild1.jpg');
    }
}

let myButton = document.querySelector('button');
let myGreating = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Bitte Name eingeben');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myGreating.textContent = 'Hallo, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myGreating.textContent = 'Willkommen zurück, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }