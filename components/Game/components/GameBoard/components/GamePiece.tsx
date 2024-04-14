import { Typography } from "@mui/material";
import { Color, Piece } from "../../../../../types";
import isHumanPiece from "./helpers/isHumanPiece";

type GamePieceProps = {
  piece: Piece;
  humanColor: Color;
};

const GamePiece = (props: GamePieceProps) => {
  const { piece, humanColor } = props;

  const pieceColor = isHumanPiece(piece)
    ? humanColor
    : humanColor == Color.WHITE
    ? Color.BLACK
    : Color.WHITE;

  return (
    <Typography
      variant="h6"
      color={pieceColor === Color.WHITE ? "white" : "black"}
    >
      {piece.slice(0, 1).toUpperCase() + piece.slice(1, 1).toLowerCase()}
    </Typography>
  );
};

export default GamePiece;
