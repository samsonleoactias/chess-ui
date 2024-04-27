import {
  Color,
  PieceLocations,
  PossibleMovesAssignedToPieces,
  SelectedSpots,
  Spot,
} from "../../../../types";
import { Grid } from "@mui/material";
import { useState } from "react";
import findWhatPieceIsOnASquare from "../../../../utils/findWhatPieceIsOnASquare";
import GamePiece from "./components/GamePiece";
import generateSelectedSpot from "./helpers";

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
  const [selected, setSelected] = useState<SelectedSpots>(
    generateSelectedSpot()
  );

  // TODO check for winner

  const handleSelectSpot = (selectedSpot: Spot) => {
    setSelected(generateSelectedSpot(selectedSpot));
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleSelectSpot(Spot.SPOT8A);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 0)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT8A]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 1)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT8B]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 2)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT8C]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 3)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT8D]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 4)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT8E]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 5)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT8F]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 6)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT8G]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 7)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT8H]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 0)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT7A]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 1)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT7B]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 2)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT7C]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 3)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT7D]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 4)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT7E]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 5)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT7F]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 6)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT7G]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 7)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT7H]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 0)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT6A]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 1)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT6B]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 2)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT6C]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 3)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT6D]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 4)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT6E]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 5)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT6F]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 6)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT6G]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 7)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT6H]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 0)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT5A]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 1)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT5B]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 2)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT5C]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 3)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT5D]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 4)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT5E]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 5)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT5F]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 6)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT5G]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 7)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT5H]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 0)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT4A]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 1)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT4B]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 2)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT4C]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 3)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT4D]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 4)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT4E]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 5)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT4F]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 6)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT4G]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 7)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT4H]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 0)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT3A]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 1)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT3B]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 2)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT3C]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 3)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT3D]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 4)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT3E]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 5)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT3F]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 6)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT3G]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 7)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT3H]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 0)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT2A]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 1)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT2B]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 2)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT2C]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 3)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT2D]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 4)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT2E]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 5)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT2F]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 6)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT2G]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 7)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT2H]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 0)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT1A]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 1)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT1B]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 2)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT1C]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 3)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT1D]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 4)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT1E]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 5)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT1F]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 6)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT1G]}
            />
          </Grid>
          <Grid item xs={1}>
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 7)}
              humanColor={humanColor}
              selected={selected[Spot.SPOT1H]}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GameBoard;
