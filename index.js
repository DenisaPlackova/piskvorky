let player = 'circle';

const square = document.querySelector('.tah');
const buttons = document.querySelectorAll('.hraci-pole button');

const move = (event) => {
  if (player === 'circle') {
    event.target.disabled = true;
    event.target.classList.add('board__field--circle');
    player = 'cross';
    square.classList.add('board__field--cross');
    square.classList.remove('board__field--circle');
  } else {
    event.target.disabled = true;
    player = 'circle';
    event.target.classList.add('board__field--cross');
    square.classList.add('board__field--circle');
    square.classList.remove('board__field--cross');
  }
  console.log(event);
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}
