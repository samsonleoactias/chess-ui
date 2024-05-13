import { Box } from "@mui/material";
import { Color, Piece } from "../../../../../types";
import { makePieceSvgData, isHumanPiece } from "./helpers";
import Image from "next/image";

type GamePieceProps = {
  piece: Piece;
  humanColor: Color;
  backgroundColor?: string;
  selected: boolean;
  possibleMove: boolean;
  sideEffect: boolean;
};

const GamePiece = (props: GamePieceProps) => {
  const {
    piece,
    humanColor,
    backgroundColor,
    selected,
    possibleMove,
    sideEffect,
  } = props;

  const pieceColor = isHumanPiece(piece)
    ? humanColor
    : humanColor.toString() === "WHITE"
    ? Color.BLACK
    : Color.WHITE;

  const svgData = makePieceSvgData(piece, pieceColor);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        m: 0.5,
        backgroundColor,
        height: "50px",
        border:
          (isHumanPiece(piece) && selected) || possibleMove || sideEffect
            ? 8
            : 4,
        borderColor: sideEffect
          ? "#ffafcc"
          : possibleMove
          ? "#38598b"
          : isHumanPiece(piece) && selected
          ? "#27296d"
          : "black",
        width: "50px",
      }}
    >
      {svgData.src ? (
        <Image
          src={`${svgData.src}`}
          alt={svgData.alt}
          width="30"
          height="30"
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default GamePiece;
