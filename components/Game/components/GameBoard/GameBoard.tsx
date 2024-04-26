import {
  Color,
  PieceLocations,
  PossibleMovesAssignedToPieces,
  SelectedSpots,
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
  const [selected, setSelected] = useState<SelectedSpots>({
    spot8a: false,
    spot8b: false,
    spot8c: false,
    spot8d: false,
    spot8e: false,
    spot8f: false,
    spot8g: false,
    spot8h: false,
    spot7a: false,
    spot7b: false,
    spot7c: false,
    spot7d: false,
    spot7e: false,
    spot7f: false,
    spot7g: false,
    spot7h: false,
    spot6a: false,
    spot6b: false,
    spot6c: false,
    spot6d: false,
    spot6e: false,
    spot6f: false,
    spot6g: false,
    spot6h: false,
    spot5a: false,
    spot5b: false,
    spot5c: false,
    spot5d: false,
    spot5e: false,
    spot5f: false,
    spot5g: false,
    spot5h: false,
    spot4a: false,
    spot4b: false,
    spot4c: false,
    spot4d: false,
    spot4e: false,
    spot4f: false,
    spot4g: false,
    spot4h: false,
    spot3a: false,
    spot3b: false,
    spot3c: false,
    spot3d: false,
    spot3e: false,
    spot3f: false,
    spot3g: false,
    spot3h: false,
    spot2a: false,
    spot2b: false,
    spot2c: false,
    spot2d: false,
    spot2e: false,
    spot2f: false,
    spot2g: false,
    spot2h: false,
    spot1a: false,
    spot1b: false,
    spot1c: false,
    spot1d: false,
    spot1e: false,
    spot1f: false,
    spot1g: false,
    spot1h: false,
  });

  // TODO check for winner

  const handleSelectSpot = () => {};

  return (
    <>
      <Grid container spacing={1}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 0)}
              humanColor={humanColor}
              selected={selected.spot8a}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 1)}
              humanColor={humanColor}
              selected={selected.spot8b}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 2)}
              humanColor={humanColor}
              selected={selected.spot8c}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 3)}
              humanColor={humanColor}
              selected={selected.spot8d}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 4)}
              humanColor={humanColor}
              selected={selected.spot8e}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 5)}
              humanColor={humanColor}
              selected={selected.spot8f}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 6)}
              humanColor={humanColor}
              selected={selected.spot8g}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 7)}
              humanColor={humanColor}
              selected={selected.spot8h}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 0)}
              humanColor={humanColor}
              selected={selected.spot7a}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 1)}
              humanColor={humanColor}
              selected={selected.spot7b}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 2)}
              humanColor={humanColor}
              selected={selected.spot7c}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 3)}
              humanColor={humanColor}
              selected={selected.spot7d}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 4)}
              humanColor={humanColor}
              selected={selected.spot7e}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 5)}
              humanColor={humanColor}
              selected={selected.spot7f}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 6)}
              humanColor={humanColor}
              selected={selected.spot7g}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 7)}
              humanColor={humanColor}
              selected={selected.spot7h}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 0)}
              humanColor={humanColor}
              selected={selected.spot6a}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 1)}
              humanColor={humanColor}
              selected={selected.spot6b}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 2)}
              humanColor={humanColor}
              selected={selected.spot6c}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 3)}
              humanColor={humanColor}
              selected={selected.spot6d}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 4)}
              humanColor={humanColor}
              selected={selected.spot6e}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 5)}
              humanColor={humanColor}
              selected={selected.spot6f}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 6)}
              humanColor={humanColor}
              selected={selected.spot6g}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 7)}
              humanColor={humanColor}
              selected={selected.spot6h}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 0)}
              humanColor={humanColor}
              selected={selected.spot5a}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 1)}
              humanColor={humanColor}
              selected={selected.spot5b}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 2)}
              humanColor={humanColor}
              selected={selected.spot5c}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 3)}
              humanColor={humanColor}
              selected={selected.spot5d}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 4)}
              humanColor={humanColor}
              selected={selected.spot5e}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 5)}
              humanColor={humanColor}
              selected={selected.spot5f}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 6)}
              humanColor={humanColor}
              selected={selected.spot5g}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 7)}
              humanColor={humanColor}
              selected={selected.spot5h}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 0)}
              humanColor={humanColor}
              selected={selected.spot4a}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 1)}
              humanColor={humanColor}
              selected={selected.spot4b}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 2)}
              humanColor={humanColor}
              selected={selected.spot4c}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 3)}
              humanColor={humanColor}
              selected={selected.spot4d}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 4)}
              humanColor={humanColor}
              selected={selected.spot4e}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 5)}
              humanColor={humanColor}
              selected={selected.spot4f}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 6)}
              humanColor={humanColor}
              selected={selected.spot4g}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 7)}
              humanColor={humanColor}
              selected={selected.spot4h}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 0)}
              humanColor={humanColor}
              selected={selected.spot3a}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 1)}
              humanColor={humanColor}
              selected={selected.spot3b}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 2)}
              humanColor={humanColor}
              selected={selected.spot3c}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 3)}
              humanColor={humanColor}
              selected={selected.spot3d}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 4)}
              humanColor={humanColor}
              selected={selected.spot3e}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 5)}
              humanColor={humanColor}
              selected={selected.spot3f}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 6)}
              humanColor={humanColor}
              selected={selected.spot3g}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 7)}
              humanColor={humanColor}
              selected={selected.spot3h}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 0)}
              humanColor={humanColor}
              selected={selected.spot2a}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 1)}
              humanColor={humanColor}
              selected={selected.spot2b}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 2)}
              humanColor={humanColor}
              selected={selected.spot2c}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 3)}
              humanColor={humanColor}
              selected={selected.spot2d}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 4)}
              humanColor={humanColor}
              selected={selected.spot2e}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 5)}
              humanColor={humanColor}
              selected={selected.spot2f}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 6)}
              humanColor={humanColor}
              selected={selected.spot2g}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 7)}
              humanColor={humanColor}
              selected={selected.spot2h}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 0)}
              humanColor={humanColor}
              selected={selected.spot1a}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 1)}
              humanColor={humanColor}
              selected={selected.spot1b}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 2)}
              humanColor={humanColor}
              selected={selected.spot1c}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 3)}
              humanColor={humanColor}
              selected={selected.spot1d}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 4)}
              humanColor={humanColor}
              selected={selected.spot1e}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 5)}
              humanColor={humanColor}
              selected={selected.spot1f}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 6)}
              humanColor={humanColor}
              selected={selected.spot1g}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 7)}
              humanColor={humanColor}
              selected={selected.spot1h}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GameBoard;
