import { Piece, PossibleMove } from "@/types";

const generateEnPassantSquares = (
  possibleMoves?: PossibleMove[]
): Piece[][] => {
  let squares: Piece[][] = [
    [
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
    ],
    [
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
    ],
    [
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
    ],
    [
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
    ],
    [
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
    ],
    [
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
    ],
    [
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
    ],
    [
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
      Piece.None,
    ],
  ];
  console.log("test1");
  possibleMoves?.forEach((possibleMove) => {
    if (possibleMove.enPassantCapture) {
      squares[possibleMove.location.row][possibleMove.location.column] =
        possibleMove.enPassantCapture;
    }
  });
  console.log("test2");

  return squares;
};

export default generateEnPassantSquares;
