// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



const heart = document.querySelector('.like-glyph')
const error = document.querySelector('#modal')

heart.addEventListener('click', function(event) {
  mimicServerCall()
  .then(response => handleHeart(response,event))
  .catch(error => handleError(error))
})

function handleHeart (response, event) {
  if(response === "Pretend remote server notified of action!" && heart.classList.contains('activated-heart')){
    changeHeart(event)
  } else {
    fullHeart(event)
  }
}

function fullHeart (event) {
  event.target.textContent = FULL_HEART
  heart.classList.add('activated-heart')
}

function changeHeart(event) {
  event.target.textContent = EMPTY_HEART
  heart.classList.remove('activated-heart')
}

function handleError (error) {
  removeClass()
  alert(error)
  setTimeout((() => addClass()), 3000)
}

function removeClass() {
  error.classList.remove('hidden')
}

function addClass() {
  error.classList.add('hidden')
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
