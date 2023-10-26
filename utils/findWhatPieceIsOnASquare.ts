import { Piece, PieceLocations } from "../types";

const findWhatPieceIsOnASquare = (
  pieceLocations: PieceLocations,
  row: number,
  column: number
): Piece => {
  if (pieceLocations.matrix[row][column] === false) {
    return Piece.None;
  }

  if (
    pieceLocations.humanPawnA.row === row &&
    pieceLocations.humanPawnA.column === column &&
    pieceLocations.humanPawnA.captured === false
  ) {
    return Piece.HumanPawnA;
  }

  if (
    pieceLocations.humanPawnB.row === row &&
    pieceLocations.humanPawnB.column === column &&
    pieceLocations.humanPawnB.captured === false
  ) {
    return Piece.HumanPawnB;
  }

  if (
    pieceLocations.humanPawnC.row === row &&
    pieceLocations.humanPawnC.column === column &&
    pieceLocations.humanPawnC.captured === false
  ) {
    return Piece.HumanPawnC;
  }

  if (
    pieceLocations.humanPawnD.row === row &&
    pieceLocations.humanPawnD.column === column &&
    pieceLocations.humanPawnD.captured === false
  ) {
    return Piece.HumanPawnD;
  }

  if (
    pieceLocations.humanPawnE.row === row &&
    pieceLocations.humanPawnE.column === column &&
    pieceLocations.humanPawnE.captured === false
  ) {
    return Piece.HumanPawnE;
  }

  if (
    pieceLocations.humanPawnF.row === row &&
    pieceLocations.humanPawnF.column === column &&
    pieceLocations.humanPawnF.captured === false
  ) {
    return Piece.HumanPawnF;
  }

  if (
    pieceLocations.humanPawnG.row === row &&
    pieceLocations.humanPawnG.column === column &&
    pieceLocations.humanPawnG.captured === false
  ) {
    return Piece.HumanPawnG;
  }

  if (
    pieceLocations.humanPawnH.row === row &&
    pieceLocations.humanPawnH.column === column &&
    pieceLocations.humanPawnH.captured === false
  ) {
    return Piece.HumanPawnH;
  }

  if (
    pieceLocations.humanRookA.row === row &&
    pieceLocations.humanRookA.column === column &&
    pieceLocations.humanRookA.captured === false
  ) {
    return Piece.HumanRookA;
  }

  if (
    pieceLocations.humanRookB.row === row &&
    pieceLocations.humanRookB.column === column &&
    pieceLocations.humanRookB.captured === false
  ) {
    return Piece.HumanRookB;
  }

  if (
    pieceLocations.humanKnightA.row === row &&
    pieceLocations.humanKnightA.column === column &&
    pieceLocations.humanKnightA.captured === false
  ) {
    return Piece.HumanKnightA;
  }

  if (
    pieceLocations.humanKnightB.row === row &&
    pieceLocations.humanKnightB.column === column &&
    pieceLocations.humanKnightB.captured === false
  ) {
    return Piece.HumanKnightB;
  }

  if (
    pieceLocations.humanBishopA.row === row &&
    pieceLocations.humanBishopA.column === column &&
    pieceLocations.humanBishopA.captured === false
  ) {
    return Piece.HumanBishopA;
  }

  if (
    pieceLocations.humanBishopB.row === row &&
    pieceLocations.humanBishopB.column === column &&
    pieceLocations.humanBishopB.captured === false
  ) {
    return Piece.HumanPawnF;
  }

  if (
    pieceLocations.humanQueen.row === row &&
    pieceLocations.humanQueen.column === column &&
    pieceLocations.humanQueen.captured === false
  ) {
    return Piece.HumanQueen;
  }

  if (
    pieceLocations.humanKing.row === row &&
    pieceLocations.humanKing.column === column &&
    pieceLocations.humanKing.captured === false
  ) {
    return Piece.HumanKing;
  }

  if (
    pieceLocations.aiPawnA.row === row &&
    pieceLocations.aiPawnA.column === column &&
    pieceLocations.aiPawnA.captured === false
  ) {
    return Piece.AiPawnA;
  }

  if (
    pieceLocations.aiPawnB.row === row &&
    pieceLocations.aiPawnB.column === column &&
    pieceLocations.aiPawnB.captured === false
  ) {
    return Piece.AiPawnB;
  }

  if (
    pieceLocations.aiPawnC.row === row &&
    pieceLocations.aiPawnC.column === column &&
    pieceLocations.aiPawnC.captured === false
  ) {
    return Piece.AiPawnC;
  }

  if (
    pieceLocations.aiPawnD.row === row &&
    pieceLocations.aiPawnD.column === column &&
    pieceLocations.aiPawnD.captured === false
  ) {
    return Piece.AiPawnD;
  }

  if (
    pieceLocations.aiPawnE.row === row &&
    pieceLocations.aiPawnE.column === column &&
    pieceLocations.aiPawnE.captured === false
  ) {
    return Piece.AiPawnE;
  }

  if (
    pieceLocations.aiPawnF.row === row &&
    pieceLocations.aiPawnF.column === column &&
    pieceLocations.aiPawnF.captured === false
  ) {
    return Piece.AiPawnF;
  }

  if (
    pieceLocations.aiPawnG.row === row &&
    pieceLocations.aiPawnG.column === column &&
    pieceLocations.aiPawnG.captured === false
  ) {
    return Piece.AiPawnG;
  }

  if (
    pieceLocations.aiPawnH.row === row &&
    pieceLocations.aiPawnH.column === column &&
    pieceLocations.aiPawnH.captured === false
  ) {
    return Piece.AiPawnH;
  }

  if (
    pieceLocations.aiRookA.row === row &&
    pieceLocations.aiRookA.column === column &&
    pieceLocations.aiRookA.captured === false
  ) {
    return Piece.AiRookA;
  }

  if (
    pieceLocations.aiRookB.row === row &&
    pieceLocations.aiRookB.column === column &&
    pieceLocations.aiRookB.captured === false
  ) {
    return Piece.AiRookB;
  }

  if (
    pieceLocations.aiKnightA.row === row &&
    pieceLocations.aiKnightA.column === column &&
    pieceLocations.aiKnightA.captured === false
  ) {
    return Piece.AiKnightA;
  }

  if (
    pieceLocations.aiKnightB.row === row &&
    pieceLocations.aiKnightB.column === column &&
    pieceLocations.aiKnightB.captured === false
  ) {
    return Piece.AiKnightB;
  }

  if (
    pieceLocations.aiBishopA.row === row &&
    pieceLocations.aiBishopA.column === column &&
    pieceLocations.aiBishopA.captured === false
  ) {
    return Piece.AiBishopA;
  }

  if (
    pieceLocations.aiBishopB.row === row &&
    pieceLocations.aiBishopB.column === column &&
    pieceLocations.aiBishopB.captured === false
  ) {
    return Piece.AiPawnF;
  }

  if (
    pieceLocations.aiQueen.row === row &&
    pieceLocations.aiQueen.column === column &&
    pieceLocations.aiQueen.captured === false
  ) {
    return Piece.AiQueen;
  }

  if (
    pieceLocations.aiKing.row === row &&
    pieceLocations.aiKing.column === column &&
    pieceLocations.aiKing.captured === false
  ) {
    return Piece.AiKing;
  }

  return Piece.None;
};

export default findWhatPieceIsOnASquare;
