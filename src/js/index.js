// How to make this a fucntional project
// Use constants, do not reassign variable vlaues
// map is useful because it creates an entirley new array
// pure functions -Given a specific input, a pure function always returns the same output.
// Pure functions cannot rely on external variables or state.

//Business Logic

export var increment = (function (n) {
  return function () {
    n++;
    return n;
  };
})(0);

export function makeArray() {
  const cellElements = document.querySelectorAll("[data-cell]");
  const finalArr = [...cellElements].map(function (cell) {
    return cell.innerHTML;
  });
  return finalArr;
}

export function checkPlayerWon(finalArr) {
  const playerTwo = "O";
  const playerOne = "X";
  if (winner(playerOne, finalArr)) return true;
  else if (winner(playerTwo, finalArr)) return false;
}

export function winner(player, array) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombos.some((combination) => {
    return combination.every((index) => {
      return array[index].includes(player);
    });
  });
}

//User Interface

export function placeMark(cell, clicks) {
  if (clicks < 1 || clicks % 2 === 0) {
    document.getElementById(cell).innerHTML = "X";
  } else if (clicks >= 1 && clicks % 2 === 1) {
    document.getElementById(cell).innerHTML = "O";
  }
}

$(document).ready(function () {
  $("[data-cell]").click(function (event) {
    event.preventDefault();
    const theArray = makeArray();
    if (
      document.getElementById(event.target.id).innerHTML === "" &&
      checkPlayerWon(theArray) === undefined
    ) {
      const clicks = increment();
      placeMark(event.target.id, clicks);
      const theArray = makeArray();
      console.log(theArray);
      if (checkPlayerWon(theArray) === true) $("#message").text("X Wins!");
      else if (checkPlayerWon(theArray) === false)
        $("#message").text("O Wins!");
      else if (clicks >= 9 && checkPlayerWon(theArray) === undefined)
        $("#message").text("Draw!");
    }
  });
  $(".resetBtn").click(function (event) {
    event.preventDefault();
    document.location.reload();
  });
});
