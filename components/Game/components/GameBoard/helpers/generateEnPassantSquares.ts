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

  possibleMoves?.forEach((possibleMove) => {
    if (possibleMove.enPassantCapture) {
      squares[possibleMove.location.row][possibleMove.location.column] =
        possibleMove.enPassantCapture;
    }
  });

  return squares;
};

export default generateEnPassantSquares;
