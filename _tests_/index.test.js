import { checkPlayerWon } from "./../src/js/index";
import { makeArray } from "./../src/js/index";
import { winner } from "./../src/js/index";
import { increment } from "./../src/js/index";
import { placeMark } from "./../src/js/index";

describe("winner", () => {
  test("return true if player one wins", () => {
    const finalArr = ["X", "X", "X", "", "", "", "", "", ""];
    const playerOne = "X";
    const win = winner(playerOne, finalArr);
    expect(win).toBeTruthy();
  });
});

describe("winner", () => {
  test("return true if player two wins", () => {
    const finalArr = ["O", "O", "O", "", "", "", "", "", ""];
    const playerTwo = "O";
    const win = winner(playerTwo, finalArr);
    expect(win).toBeTruthy();
  });
});

describe("winner", () => {
  test("return false if no player has won the game", () => {
    const finalArr = ["O", "O", "", "", "", "", "", "", ""];
    const playerTwo = "O";
    const win = winner(playerTwo, finalArr);
    expect(win).toBeFalsy();
  });
});

describe("checkPlayerWon", () => {
  test("return true if player one wins", () => {
    const finalArr = ["X", "X", "X", "", "", "", "", "", ""];
    const win = checkPlayerWon(finalArr);
    expect(win).toBeTruthy();
  });
});

describe("checkPlayerWon", () => {
  test("return false if player two wins", () => {
    const finalArr = ["O", "O", "O", "", "", "", "", "", ""];
    const win = checkPlayerWon(finalArr);
    expect(win).toBeFalsy();
  });
});

describe("increment", () => {
  test("return increase in counter", () => {
    expect(increment()).toBe(1);
  });
});

describe("placeMArk", () => {
  test("return an X or and O based on increment value", () => {
    document.body.innerHTML = `
        <table>
          <tr>
            <td id="1" data-cell></td>
            <td id="2" data-cell></td>
            <td id="3" data-cell></td>
          </tr>
        </table>`;
    const clicks = 1;
    const cell = 1;
    placeMark(cell, clicks);
    expect(document.getElementById(1).innerHTML).toBe("O");
  });
});

describe("making an array", () => {
  test("returning an array with index 0-8", () => {
    document.body.innerHTML = `
        <table>
          <tr>
            <td id="1" data-cell></td>
            <td id="2" data-cell></td>
            <td id="3" data-cell></td>
          </tr>
          <tr>
            <td id="4" data-cell></td>
            <td id="5" data-cell></td>
            <td id="6" data-cell></td>
          </tr>
          <tr>
            <td id="7" data-cell></td>
            <td id="8" data-cell></td>
            <td id="9" data-cell></td>
          </tr>
        </table>`;
    console.log(makeArray());
    expect(makeArray()).toEqual(["", "", "", "", "", "", "", "", ""]);
  });
});
