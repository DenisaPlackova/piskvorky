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

const getSymbol = (field) => {
  if (field.classList.contains('board__field--circle')) {
    return 'circle';
  } else if (field.classList.contains('board__field--cross')) {
    return 'cross';
  }
};

const size = 10;
const fields = document.querySelectorAll('.pole');
const getField = (row, column) => {
  return fields[row * size + column];
};

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let y;
  let x;

  let inRow = 1;

  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;

  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  let inDiagonal = 1;

  y = origin.column;
  x = origin.row;
  while (
    x > 0 &&
    symbol === getSymbol(getField(x - 1, y + 1)) &&
    y < boardSize - 1
  ) {
    inDiagonal++;
    y++;
    x--;
  }

  y = origin.column;
  x = origin.row;
  while (x > 0 && symbol === getSymbol(getField(x - 1, y - 1)) && y > 0) {
    inDiagonal++;
    y--;
    x--;
  }

  y = origin.column;
  x = origin.row;
  while (
    x < boardSize - 1 &&
    symbol === getSymbol(getField(x + 1, y + 1)) &&
    y < boardSize - 1
  ) {
    inDiagonal++;
    y++;
    x++;
  }

  y = origin.column;
  x = origin.row;
  while (
    x < boardSize - 1 &&
    symbol === getSymbol(getField(x + 1, y - 1)) &&
    y > 0
  ) {
    inDiagonal++;
    y--;
    x++;
  }

  if (inDiagonal >= symbolsToWin) {
    return true;
  }

  return false;
};
