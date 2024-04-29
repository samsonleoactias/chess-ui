import {
  Color,
  PossibleMovesAssignedToPieces,
  PieceLocations,
  Piece,
} from "../../../../types";
import { Grid } from "@mui/material";
import { useState } from "react";
import findWhatPieceIsOnASquare from "../../../../utils/findWhatPieceIsOnASquare";
import GamePiece from "./components/GamePiece";
import {
  generateSelectedSquare,
  generatePossibleMovesSquares,
  determineActiveSquare,
} from "./helpers";

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

  const [selected, setSelected] = useState<boolean[][]>(
    generateSelectedSquare()
  );
  const [possibleMoves, setPossibleMoves] = useState<boolean[][]>(
    generatePossibleMovesSquares()
  );
  const [pieceLocations, setPieceLocations] =
    useState<PieceLocations>(pieceLocationsProp);

  // TODO check for winner

  const handleClickSpot = (row: number, column: number) => {
    if (possibleMoves[row][column] === true) {
      let newPieceLocations: PieceLocations = pieceLocations;

      let activeSquare: { row: number; column: number } =
        determineActiveSquare(selected);

      let activePiece: Piece = findWhatPieceIsOnASquare(
        pieceLocations,
        activeSquare.row,
        activeSquare.column
      );

      let pieceAlreadyOnSquare = findWhatPieceIsOnASquare(
        pieceLocations,
        row,
        column
      );

      if (activePiece !== Piece.None) {
        if (pieceAlreadyOnSquare !== Piece.None) {
          pieceLocations[pieceAlreadyOnSquare].captured = true;
        }

        newPieceLocations[activePiece].row = row;
        newPieceLocations[activePiece].column = column;
        newPieceLocations.matrix[row][column] = false;
        newPieceLocations.matrix[newPieceLocations[activePiece].row][
          newPieceLocations[activePiece].column
        ] = true;
      }

      setPieceLocations(newPieceLocations);
      setSelected(generateSelectedSquare());
      setPossibleMoves(generatePossibleMovesSquares());
    } else {
      setSelected(generateSelectedSquare(row, column));
      setPossibleMoves(
        generatePossibleMovesSquares(
          possibleMovesProp[
            findWhatPieceIsOnASquare(pieceLocations, row, column)
          ]
        )
      );
    }
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(0, 0);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 0)}
              humanColor={humanColorProp}
              selected={selected[0][0]}
              possibleMove={possibleMoves[0][0]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(0, 1);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 1)}
              humanColor={humanColorProp}
              selected={selected[0][1]}
              possibleMove={possibleMoves[0][1]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(0, 2);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 2)}
              humanColor={humanColorProp}
              selected={selected[0][2]}
              possibleMove={possibleMoves[0][2]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(0, 3);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 3)}
              humanColor={humanColorProp}
              selected={selected[0][3]}
              possibleMove={possibleMoves[0][3]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(0, 4);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 4)}
              humanColor={humanColorProp}
              selected={selected[0][4]}
              possibleMove={possibleMoves[0][4]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(0, 5);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 5)}
              humanColor={humanColorProp}
              selected={selected[0][5]}
              possibleMove={possibleMoves[0][5]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(0, 6);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 6)}
              humanColor={humanColorProp}
              selected={selected[0][6]}
              possibleMove={possibleMoves[0][6]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(0, 7);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 0, 7)}
              humanColor={humanColorProp}
              selected={selected[0][7]}
              possibleMove={possibleMoves[0][7]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(1, 0);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 0)}
              humanColor={humanColorProp}
              selected={selected[1][0]}
              possibleMove={possibleMoves[1][0]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(1, 1);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 1)}
              humanColor={humanColorProp}
              selected={selected[1][1]}
              possibleMove={possibleMoves[1][1]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(1, 2);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 2)}
              humanColor={humanColorProp}
              selected={selected[1][2]}
              possibleMove={possibleMoves[1][2]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(1, 3);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 3)}
              humanColor={humanColorProp}
              selected={selected[1][3]}
              possibleMove={possibleMoves[1][3]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(1, 4);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 4)}
              humanColor={humanColorProp}
              selected={selected[1][4]}
              possibleMove={possibleMoves[1][4]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(1, 5);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 5)}
              humanColor={humanColorProp}
              selected={selected[1][5]}
              possibleMove={possibleMoves[1][5]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(1, 6);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 6)}
              humanColor={humanColorProp}
              selected={selected[1][6]}
              possibleMove={possibleMoves[1][6]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(1, 7);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 1, 7)}
              humanColor={humanColorProp}
              selected={selected[1][7]}
              possibleMove={possibleMoves[1][7]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(2, 0);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 0)}
              humanColor={humanColorProp}
              selected={selected[2][0]}
              possibleMove={possibleMoves[2][0]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(2, 1);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 1)}
              humanColor={humanColorProp}
              selected={selected[2][1]}
              possibleMove={possibleMoves[2][1]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(2, 2);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 2)}
              humanColor={humanColorProp}
              selected={selected[2][2]}
              possibleMove={possibleMoves[2][2]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(2, 3);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 3)}
              humanColor={humanColorProp}
              selected={selected[2][3]}
              possibleMove={possibleMoves[2][3]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(2, 4);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 4)}
              humanColor={humanColorProp}
              selected={selected[2][4]}
              possibleMove={possibleMoves[2][4]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(2, 5);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 5)}
              humanColor={humanColorProp}
              selected={selected[2][5]}
              possibleMove={possibleMoves[2][5]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(2, 6);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 6)}
              humanColor={humanColorProp}
              selected={selected[2][6]}
              possibleMove={possibleMoves[2][6]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(2, 7);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 2, 7)}
              humanColor={humanColorProp}
              selected={selected[2][7]}
              possibleMove={possibleMoves[2][7]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(3, 0);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 0)}
              humanColor={humanColorProp}
              selected={selected[3][0]}
              possibleMove={possibleMoves[3][0]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(3, 1);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 1)}
              humanColor={humanColorProp}
              selected={selected[3][1]}
              possibleMove={possibleMoves[3][1]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(3, 2);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 2)}
              humanColor={humanColorProp}
              selected={selected[3][2]}
              possibleMove={possibleMoves[3][2]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(3, 3);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 3)}
              humanColor={humanColorProp}
              selected={selected[3][3]}
              possibleMove={possibleMoves[3][3]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(3, 4);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 4)}
              humanColor={humanColorProp}
              selected={selected[3][4]}
              possibleMove={possibleMoves[3][4]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(3, 5);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 5)}
              humanColor={humanColorProp}
              selected={selected[3][5]}
              possibleMove={possibleMoves[3][5]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(3, 6);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 6)}
              humanColor={humanColorProp}
              selected={selected[3][6]}
              possibleMove={possibleMoves[3][6]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(3, 7);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 3, 7)}
              humanColor={humanColorProp}
              selected={selected[3][7]}
              possibleMove={possibleMoves[3][7]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(4, 0);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 0)}
              humanColor={humanColorProp}
              selected={selected[4][0]}
              possibleMove={possibleMoves[4][0]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(4, 1);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 1)}
              humanColor={humanColorProp}
              selected={selected[4][1]}
              possibleMove={possibleMoves[4][1]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(4, 2);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 2)}
              humanColor={humanColorProp}
              selected={selected[4][2]}
              possibleMove={possibleMoves[4][2]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(4, 3);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 3)}
              humanColor={humanColorProp}
              selected={selected[4][3]}
              possibleMove={possibleMoves[4][3]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(4, 4);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 4)}
              humanColor={humanColorProp}
              selected={selected[4][4]}
              possibleMove={possibleMoves[4][4]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(4, 5);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 5)}
              humanColor={humanColorProp}
              selected={selected[4][5]}
              possibleMove={possibleMoves[4][5]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(4, 6);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 6)}
              humanColor={humanColorProp}
              selected={selected[4][6]}
              possibleMove={possibleMoves[4][6]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(4, 7);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 4, 7)}
              humanColor={humanColorProp}
              selected={selected[4][7]}
              possibleMove={possibleMoves[4][7]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(5, 0);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 0)}
              humanColor={humanColorProp}
              selected={selected[5][0]}
              possibleMove={possibleMoves[5][0]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(5, 1);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 1)}
              humanColor={humanColorProp}
              selected={selected[5][1]}
              possibleMove={possibleMoves[5][1]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(5, 2);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 2)}
              humanColor={humanColorProp}
              selected={selected[5][2]}
              possibleMove={possibleMoves[5][2]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(5, 3);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 3)}
              humanColor={humanColorProp}
              selected={selected[5][3]}
              possibleMove={possibleMoves[5][3]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(5, 4);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 4)}
              humanColor={humanColorProp}
              selected={selected[5][4]}
              possibleMove={possibleMoves[5][4]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(5, 5);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 5)}
              humanColor={humanColorProp}
              selected={selected[5][5]}
              possibleMove={possibleMoves[5][5]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(5, 6);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 6)}
              humanColor={humanColorProp}
              selected={selected[5][6]}
              possibleMove={possibleMoves[5][6]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(5, 7);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 5, 7)}
              humanColor={humanColorProp}
              selected={selected[5][7]}
              possibleMove={possibleMoves[5][7]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(6, 0);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 0)}
              humanColor={humanColorProp}
              selected={selected[6][0]}
              possibleMove={possibleMoves[6][0]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(6, 1);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 1)}
              humanColor={humanColorProp}
              selected={selected[6][1]}
              possibleMove={possibleMoves[6][1]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(6, 2);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 2)}
              humanColor={humanColorProp}
              selected={selected[6][2]}
              possibleMove={possibleMoves[6][2]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(6, 3);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 3)}
              humanColor={humanColorProp}
              selected={selected[6][3]}
              possibleMove={possibleMoves[6][3]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(6, 4);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 4)}
              humanColor={humanColorProp}
              selected={selected[6][4]}
              possibleMove={possibleMoves[6][4]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(6, 5);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 5)}
              humanColor={humanColorProp}
              selected={selected[6][5]}
              possibleMove={possibleMoves[6][5]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(6, 6);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 6)}
              humanColor={humanColorProp}
              selected={selected[6][6]}
              possibleMove={possibleMoves[6][6]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(6, 7);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 6, 7)}
              humanColor={humanColorProp}
              selected={selected[6][7]}
              possibleMove={possibleMoves[6][7]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(7, 0);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 0)}
              humanColor={humanColorProp}
              selected={selected[7][0]}
              possibleMove={possibleMoves[7][0]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(7, 1);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 1)}
              humanColor={humanColorProp}
              selected={selected[7][1]}
              possibleMove={possibleMoves[7][1]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(7, 2);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 2)}
              humanColor={humanColorProp}
              selected={selected[7][2]}
              possibleMove={possibleMoves[7][2]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(7, 3);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 3)}
              humanColor={humanColorProp}
              selected={selected[7][3]}
              possibleMove={possibleMoves[7][3]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(7, 4);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 4)}
              humanColor={humanColorProp}
              selected={selected[7][4]}
              possibleMove={possibleMoves[7][4]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(7, 5);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 5)}
              humanColor={humanColorProp}
              selected={selected[7][5]}
              possibleMove={possibleMoves[7][5]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(7, 6);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 6)}
              humanColor={humanColorProp}
              selected={selected[7][6]}
              possibleMove={possibleMoves[7][6]}
            />
          </Grid>
          <Grid
            item
            xs={1}
            onClick={() => {
              handleClickSpot(7, 7);
            }}
          >
            <GamePiece
              piece={findWhatPieceIsOnASquare(pieceLocations, 7, 7)}
              humanColor={humanColorProp}
              selected={selected[7][7]}
              possibleMove={possibleMoves[7][7]}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GameBoard;
