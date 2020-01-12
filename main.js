// import { inherits } from "util";

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Loaded Chain:
document.addEventListener("DOMContentLoaded", () => init())
const init = () => document.querySelectorAll('.like-glyph').forEach(span => span.onclick = e => clickLike(e))


// Fetches:


// Events:
const clickLike = e => likeArticle(e.target)


// Helpers:
const likeArticle = span => {
  mimicServerCall().then(() => {
    if (span.innerText == EMPTY_HEART) {
      span.innerText = FULL_HEART
      span.className = "activated-heart"
    } else {
      span.innerText = EMPTY_HEART
      span.classList.remove("activated-heart") 
    }
  }).catch(err => {
    document.getElementById('modal-message').innerText = err
    document.getElementById('modal').classList.remove('hidden')
    setTimeout(() => document.getElementById('modal').className = "hidden", 5000)
  })
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
