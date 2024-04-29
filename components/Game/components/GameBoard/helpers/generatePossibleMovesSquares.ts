import { PossibleMove } from "@/types";

const generatePossibleMovesSquares = (
  possibleMoves?: PossibleMove[]
): boolean[][] => {
  let squares: boolean[][] = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];

  possibleMoves?.forEach((possibleMove) => {
    squares[possibleMove.location.row][possibleMove.location.column] = true;
  });

  return squares;
};

export default generatePossibleMovesSquares;
