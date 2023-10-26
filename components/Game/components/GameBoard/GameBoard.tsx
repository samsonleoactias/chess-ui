import {
  Color,
  PieceLocations,
  PossibleMovesAssignedToPieces,
} from "../../../../types";
import { Grid } from "@mui/material";
import { useState } from "react";
import findWhatPieceIsOnASquare from "../../../../utils/findWhatPieceIsOnASquare";
import GamePiece from "./components/GamePiece";

type GameBoardProps = {
  pieceLocationsProp: PieceLocations;
  possibleMovesProp: PossibleMovesAssignedToPieces;
  humanWinnerProp: boolean;
  aiWinnerProp: boolean;
  humanColorProp: Color;
};

const GameBoard = (props: GameBoardProps) => {
  const {
    pieceLocationsProp,
    possibleMovesProp,
    humanWinnerProp,
    aiWinnerProp,
    humanColorProp,
  } = props;

  const [pieceLocations, setPieceLocations] =
    useState<PieceLocations>(pieceLocationsProp);
  const [possibleMoves, setPossibleMoves] =
    useState<PossibleMovesAssignedToPieces>(possibleMovesProp);
  const [humanColor, setHumanColor] = useState<Color>(humanColorProp);
  // TODO need ai color?
  const [aiColor, setAiColor] = useState<Color>(
    humanColorProp === Color.WHITE ? Color.BLACK : Color.WHITE
  );

  // TODO check for winner

  return (
    <>
      <Grid container spacing={1}>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 0)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 1)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 2)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 3)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 4)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 5)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 6)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 7)}
              humanColor={humanColor}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 0)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 1)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 2)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 3)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 4)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 5)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 6)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 7)}
              humanColor={humanColor}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 0)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 1)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 2)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 3)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 4)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 5)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 6)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 7)}
              humanColor={humanColor}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 0)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 1)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 2)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 3)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 4)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 5)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 6)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 7)}
              humanColor={humanColor}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 0)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 1)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 2)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 3)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 4)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 5)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 6)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 7)}
              humanColor={humanColor}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 0)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 1)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 2)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 3)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 4)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 5)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 6)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 7)}
              humanColor={humanColor}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 0)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 1)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 2)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 3)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 4)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 5)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 6)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 7)}
              humanColor={humanColor}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 0)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 1)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 2)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 3)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 4)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 5)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 6)}
              humanColor={humanColor}
            />
          </Grid>
          <Grid item xs={1} sx={{ borderWidth: "2px", borderColor: "black" }}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 7)}
              humanColor={humanColor}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GameBoard;
