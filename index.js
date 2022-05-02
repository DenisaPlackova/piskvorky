let player = 'circle';

const square = document.querySelector('.tah');

const move = (event) => {
  if (player === 'circle') {
    event.target.disabled = true;
    event.target.classList.add('board__field--circle');
    player = 'cross';
    square.src = 'cross.svg';
  } else {
    event.target.disabled = true;
    player = 'circle';
    event.target.classList.add('board__field--cross');
    square.src = 'circle.svg';
  }
  console.log(event);
};

const buttons = document.querySelectorAll('.hraci-pole button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}
