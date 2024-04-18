import { Box, Typography } from "@mui/material";
import { Color, Piece } from "../../../../../types";
import isHumanPiece from "./helpers/isHumanPiece";
import makePieceIcon from "./helpers/makePieceIcon";

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        m: 0.5,
        height: "75px",
        border: 2,
        borderColor: "red",
        width: "75px",
      }}
    >
      <Typography
        variant="h6"
        color={pieceColor === Color.WHITE ? "white" : "black"}
      >
        {makePieceIcon(piece)}
      </Typography>
    </Box>
  );
};

export default GamePiece;
