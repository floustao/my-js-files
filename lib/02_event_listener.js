//Toggle one specific image
const floustao = document.getElementById('floustao');

function circle(name) {
  return name.addEventListener('click', (event) => {
    event.target.classList.toggle('img-circle');
  });
}

//Toggle multiple images

// const images = document.querySelectorAll('.togglable');
// images.forEach(image => {
//   image.addEventListener('click', (event) => {
//     event.target.classList.toggle('img-circle');
//   });
// });

//Refacto to avoid Callback Hell Syntax {{{...}}}

const images = document.querySelectorAll('.togglable');
const toggle = (event) => {
    console.log(event);
    event.target.classList.toggle('img-circle');
  };

images.forEach(image => {
  image.addEventListener('click', toggle);
});
