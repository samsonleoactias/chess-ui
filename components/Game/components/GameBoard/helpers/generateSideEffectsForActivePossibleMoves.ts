import { Piece, PossibleMove } from "@/types";

const generateSideEffectsForActivePossibleMoves = (
  possibleMoves?: PossibleMove[]
): {
  piece: Piece;
  row: number;
  column: number;
}[][][] => {
  let squares: {
    piece: Piece;
    row: number;
    column: number;
  }[][][] = [
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
  ];

  possibleMoves?.forEach((possibleMove) => {
    if (possibleMove.sideEffects)
      squares[possibleMove.location.row][possibleMove.location.column] =
        possibleMove.sideEffects;
  });

  return squares;
};

export default generateSideEffectsForActivePossibleMoves;
