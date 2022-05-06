import {text} from './assets.js';

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {

    e.preventDefault();
    
    const value = parseInt(amount.value);
    const randomNumber = Math.floor( Math.random() * text.length);
    // Empty
    // Negative
    // > 9

    if( isNaN(value) || value <= 0 || value > 9) {
        return result.textContent = text[randomNumber] ;
    } else {
        let tempText = text.slice(0,value);
        tempText = tempText.map( paragraph => {
            return `<p class="result">${paragraph}</p>`;
        }).join('');
        result.innerHTML = tempText;
    }




  
  });