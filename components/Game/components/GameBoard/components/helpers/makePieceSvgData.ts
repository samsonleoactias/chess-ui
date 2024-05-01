import { Color, Piece } from "@/types";

const makePieceSvgData = (
  piece: Piece,
  color: Color
): { src: string; alt: string } => {
  // TODO why does the direct comparison of two colors not work?
  if (
    (piece === Piece.HumanKing || piece === Piece.AiKing) &&
    (color === "black" || color.toString() === "BLACK")
  ) {
    return { src: `chessPieces/blackKing.svg`, alt: "black king" };
  }

  if (
    (piece === Piece.HumanKing || piece === Piece.AiKing) &&
    (color.toString() === "WHITE" || color === "white")
  ) {
    return { src: `chessPieces/whiteKing.svg`, alt: "white king" };
  }

  if (
    (piece === Piece.HumanQueen || piece === Piece.AiQueen) &&
    (color === "black" || color.toString() === "BLACK")
  ) {
    return { src: `chessPieces/blackQueen.svg`, alt: "black queen" };
  }

  if (
    (piece === Piece.HumanQueen || piece === Piece.AiQueen) &&
    (color.toString() === "WHITE" || color === "white")
  ) {
    return { src: `chessPieces/whiteQueen.svg`, alt: "white queen" };
  }

  if (
    (piece === Piece.HumanRookA ||
      piece === Piece.HumanRookB ||
      piece === Piece.AiRookA ||
      piece === Piece.AiRookB) &&
    (color === "black" || color.toString() === "BLACK")
  ) {
    return { src: `chessPieces/blackRook.svg`, alt: "black rook" };
  }

  if (
    (piece === Piece.HumanRookA ||
      piece === Piece.HumanRookB ||
      piece === Piece.AiRookA ||
      piece === Piece.AiRookB) &&
    (color.toString() === "WHITE" || color === "white")
  ) {
    return { src: `chessPieces/whiteRook.svg`, alt: "white rook" };
  }

  if (
    (piece === Piece.HumanKnightA ||
      piece === Piece.HumanKnightB ||
      piece === Piece.AiKnightA ||
      piece === Piece.AiKnightB) &&
    (color === "black" || color.toString() === "BLACK")
  ) {
    return { src: `chessPieces/blackKnight.svg`, alt: "black knight" };
  }

  if (
    (piece === Piece.HumanKnightA ||
      piece === Piece.HumanKnightB ||
      piece === Piece.AiKnightA ||
      piece === Piece.AiKnightB) &&
    (color.toString() === "WHITE" || color === "white")
  ) {
    return { src: `chessPieces/whiteKnight.svg`, alt: "white knight" };
  }

  if (
    (piece === Piece.HumanBishopA ||
      piece === Piece.HumanBishopB ||
      piece === Piece.AiBishopA ||
      piece === Piece.AiBishopB) &&
    (color === "black" || color.toString() === "BLACK")
  ) {
    return { src: `chessPieces/blackBishop.svg`, alt: "black bishop" };
  }

  if (
    (piece === Piece.HumanBishopA ||
      piece === Piece.HumanBishopB ||
      piece === Piece.AiBishopA ||
      piece === Piece.AiBishopB) &&
    (color.toString() === "WHITE" || color === "white")
  ) {
    return { src: `chessPieces/whiteBishop.svg`, alt: "white bishop" };
  }

  if (
    (piece === Piece.HumanPawnA ||
      piece === Piece.HumanPawnB ||
      piece === Piece.HumanPawnC ||
      piece === Piece.HumanPawnD ||
      piece === Piece.HumanPawnE ||
      piece === Piece.HumanPawnF ||
      piece === Piece.HumanPawnG ||
      piece === Piece.HumanPawnH ||
      piece === Piece.AiPawnA ||
      piece === Piece.AiPawnB ||
      piece === Piece.AiPawnC ||
      piece === Piece.AiPawnD ||
      piece === Piece.AiPawnE ||
      piece === Piece.AiPawnF ||
      piece === Piece.AiPawnG ||
      piece === Piece.AiPawnH) &&
    (color === "black" || color.toString() === "BLACK")
  ) {
    return { src: `chessPieces/blackPawn.svg`, alt: "black pawn" };
  }

  if (
    (piece === Piece.HumanPawnA ||
      piece === Piece.HumanPawnB ||
      piece === Piece.HumanPawnC ||
      piece === Piece.HumanPawnD ||
      piece === Piece.HumanPawnE ||
      piece === Piece.HumanPawnF ||
      piece === Piece.HumanPawnG ||
      piece === Piece.HumanPawnH ||
      piece === Piece.AiPawnA ||
      piece === Piece.AiPawnB ||
      piece === Piece.AiPawnC ||
      piece === Piece.AiPawnD ||
      piece === Piece.AiPawnE ||
      piece === Piece.AiPawnF ||
      piece === Piece.AiPawnG ||
      piece === Piece.AiPawnH) &&
    (color.toString() === "WHITE" || color === "white")
  ) {
    return { src: `chessPieces/whitePawn.svg`, alt: "white pawn" };
  }

  return { src: "", alt: "" };
};

export default makePieceSvgData;
