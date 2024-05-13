import { Piece } from "../../../../../../types";

const isHumanPiece = (piece: Piece): boolean => {
  const humanPieces = [
    Piece.HumanBishopA,
    Piece.HumanBishopB,
    Piece.HumanKing,
    Piece.HumanKnightA,
    Piece.HumanKnightB,
    Piece.HumanPawnA,
    Piece.HumanPawnB,
    Piece.HumanPawnC,
    Piece.HumanPawnD,
    Piece.HumanPawnE,
    Piece.HumanPawnF,
    Piece.HumanPawnG,
    Piece.HumanPawnH,
    Piece.HumanQueen,
    Piece.HumanRookA,
    Piece.HumanRookB,
  ];

  if (humanPieces.includes(piece)) return true;

  return false;
};

export default isHumanPiece;
