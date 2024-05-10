import {
  Color,
  PossibleMovesAssignedToPieces,
  PieceLocations,
  Piece,
} from "../../../../types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import findWhatPieceIsOnASquare from "../../../../utils/findWhatPieceIsOnASquare";
import GamePiece from "./components/GamePiece";
import {
  generateSelectedSquare,
  generateActivePossibleMovesSquares,
  determineActiveSquare,
  generateSideEffectsForActivePossibleMoves,
  generateEnPassantSquares,
} from "./helpers";
import { DO_TURN } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";

type GameBoardProps = {
  pieceLocationsProp: PieceLocations;
  possibleMovesProp: PossibleMovesAssignedToPieces;
  humanWinnerProp: boolean;
  aiWinnerProp: boolean;
  humanColorProp: Color;
  humanPlayerIdProp: string;
  boardIsInteractableProp: boolean;
  aiFirstMoveCompleteProp: boolean;
};

const GameBoard = (props: GameBoardProps) => {
  const {
    pieceLocationsProp,
    possibleMovesProp,
    humanWinnerProp,
    aiWinnerProp,
    humanColorProp,
    humanPlayerIdProp,
    boardIsInteractableProp,
    aiFirstMoveCompleteProp,
  } = props;

  const [aiFirstMoveComplete, setAiFirstMoveComplete] =
    useState<boolean>(false);
  const [selected, setSelected] = useState<boolean[][]>(
    generateSelectedSquare()
  );
  const [activePossibleMoves, setActivePossibleMoves] = useState<boolean[][]>(
    generateActivePossibleMovesSquares()
  );
  const [
    sideEffectsForActivePossibleMoves,
    setSideEffectsForActivePossibleMoves,
  ] = useState<
    {
      piece: Piece;
      row: number;
      column: number;
    }[][][]
  >(generateSideEffectsForActivePossibleMoves());
  const [enPassantForActivePossibleMoves, setEnPassantForActivePossibleMoves] =
    useState<Piece[][]>(generateEnPassantSquares());
  const [activeSideEffects, setActiveSideEffects] = useState<boolean[][]>(
    generateSelectedSquare()
  );
  const [activeEnPassant, setActiveEnPassant] = useState<boolean[][]>(
    generateSelectedSquare()
  );
  const [pieceLocations, setPieceLocations] =
    useState<PieceLocations>(pieceLocationsProp);
  const [possibleMoves, setPossibleMoves] =
    useState<PossibleMovesAssignedToPieces>(possibleMovesProp);
  const [dataFromServerAfterMove, setDataFromServerAfterMove] = useState<{
    possibleMoves: PossibleMovesAssignedToPieces;
    pieceLocations: PieceLocations;
  }>({ possibleMoves, pieceLocations });
  const [boardIsInteractable, setBoardIsInteractable] = useState<boolean>(
    boardIsInteractableProp
  );
  const [humanWinner, setHumanWinner] = useState<boolean>(humanWinnerProp);
  const [aiWinner, setAiWinner] = useState<boolean>(aiWinnerProp);
  const [message, setMessage] = useState<any>(null);

  const [
    doTurn,
    { loading: doTurnLoading, error: doTurnError, data: doTurnData },
  ] = useMutation(DO_TURN);

  const handleClickGoBack = () => {
    setActiveSideEffects(generateSelectedSquare());
    setSelected(generateSelectedSquare());
    setSideEffectsForActivePossibleMoves(
      generateSideEffectsForActivePossibleMoves()
    );
    setMessage("");
  };

  const handleClickYes = (row: number, column: number) => {
    setMessage("");
    setActiveSideEffects(generateSelectedSquare());
    setActiveEnPassant(generateSelectedSquare());
    setSelected(generateSelectedSquare(row, column));
    setActivePossibleMoves(
      generateActivePossibleMovesSquares(
        possibleMoves[findWhatPieceIsOnASquare(pieceLocations, row, column)]
      )
    );
    setSideEffectsForActivePossibleMoves(
      generateSideEffectsForActivePossibleMoves(
        possibleMoves[findWhatPieceIsOnASquare(pieceLocations, row, column)]
      )
    );
    setEnPassantForActivePossibleMoves(
      generateEnPassantSquares(
        possibleMoves[findWhatPieceIsOnASquare(pieceLocations, row, column)]
      )
    );
    handleClickSpot(row, column, true);
  };

  const handleClickSpot = (
    row: number,
    column: number,
    skipSideEffectCheck?: boolean
  ) => {
    if (
      !doTurnLoading &&
      !doTurnError &&
      !humanWinner &&
      !aiWinner &&
      activePossibleMoves[row][column] === true &&
      boardIsInteractable
    ) {
      if (
        sideEffectsForActivePossibleMoves[row][column].length > 0 &&
        !skipSideEffectCheck
      ) {
        setBoardIsInteractable(false);
        sideEffectsForActivePossibleMoves[row][column].forEach((sideEffect) => {
          if (sideEffect.piece !== Piece.None) {
            setSelected(
              generateSelectedSquare(
                pieceLocations[sideEffect.piece].row,
                pieceLocations[sideEffect.piece].column
              )
            );
          } else {
            throw new Error(); // TODO need better error
          }
          setActiveSideEffects(
            generateSelectedSquare(sideEffect.row, sideEffect.column)
          );
          setActivePossibleMoves(generateActivePossibleMovesSquares());
          setMessage(
            <Container>
              <Typography fontWeight="bold">
                Do you want to move the piece highlighted in blue to the square
                highlighted in pink?
              </Typography>
              <Button
                onClick={() => {
                  handleClickYes(row, column);
                }}
                sx={{
                  backgroundColor: "black",
                  height: "30px",
                  border: 4,
                  borderColor: "#ff9a3c",
                  width: "150px",
                  color: "#ff6f3c",
                  fontWeight: "bold",
                  mr: "50px",
                }}
              >
                YES
              </Button>
              <Button
                onClick={handleClickGoBack}
                sx={{
                  backgroundColor: "black",
                  height: "30px",
                  border: 4,
                  borderColor: "#ff9a3c",
                  width: "150px",
                  color: "#ff6f3c",
                  fontWeight: "bold",
                }}
              >
                GO BACK
              </Button>
            </Container>
          );
        });

        return;
      }

      let enPassantPiece = enPassantForActivePossibleMoves[row][column];

      if (enPassantPiece !== Piece.None && !skipSideEffectCheck) {
        setBoardIsInteractable(false);
        setActiveEnPassant(
          generateSelectedSquare(
            pieceLocations[enPassantPiece].row,
            pieceLocations[enPassantPiece].column
          )
        );
        setActivePossibleMoves(generateActivePossibleMovesSquares());
        setMessage(
          <Container>
            <Typography fontWeight="bold">
              Do you want to capture en passant the piece highlighted in pink?
            </Typography>
            <Button
              onClick={() => {
                handleClickYes(row, column);
              }}
              sx={{
                backgroundColor: "black",
                height: "30px",
                border: 4,
                borderColor: "#ff9a3c",
                width: "150px",
                color: "#ff6f3c",
                fontWeight: "bold",
                mr: "50px",
              }}
            >
              YES
            </Button>
            <Button
              onClick={handleClickGoBack}
              sx={{
                backgroundColor: "black",
                height: "30px",
                border: 4,
                borderColor: "#ff9a3c",
                width: "150px",
                color: "#ff6f3c",
                fontWeight: "bold",
              }}
            >
              GO BACK
            </Button>
          </Container>
        );

        return;
      }

      setBoardIsInteractable(false);

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
      setActivePossibleMoves(generateActivePossibleMovesSquares());

      sideEffectsForActivePossibleMoves[row][column].forEach((sideEffect) => {
        if (sideEffect.piece !== Piece.None) {
          newPieceLocations[sideEffect.piece].row = sideEffect.row;
          newPieceLocations[sideEffect.piece].column = sideEffect.column;
          newPieceLocations.matrix[sideEffect.row][sideEffect.column] = false;
          newPieceLocations.matrix[newPieceLocations[sideEffect.piece].row][
            newPieceLocations[sideEffect.piece].column
          ] = true;
        }
      });

      if (enPassantPiece !== Piece.None) {
        newPieceLocations[enPassantPiece].captured = true;
      }

      doTurn({
        variables: {
          humanPlayerId: humanPlayerIdProp,
          piece: activePiece.toString(),
          move: JSON.stringify({
            location: { row, column },
            sideEffects: [
              {
                piece: sideEffectsForActivePossibleMoves[row][column][0]?.piece,
                row: sideEffectsForActivePossibleMoves[row][column][0]?.row,
                column:
                  sideEffectsForActivePossibleMoves[row][column][0]?.column,
              },
            ],
            enPassantCapture:
              enPassantPiece !== Piece.None ? enPassantPiece : null,
          }),
        },
      });
    } else if (
      !doTurnLoading &&
      !doTurnError &&
      !humanWinner &&
      !aiWinner &&
      boardIsInteractable
    ) {
      setSelected(generateSelectedSquare(row, column));
      setActivePossibleMoves(
        generateActivePossibleMovesSquares(
          possibleMoves[findWhatPieceIsOnASquare(pieceLocations, row, column)]
        )
      );
      setSideEffectsForActivePossibleMoves(
        generateSideEffectsForActivePossibleMoves(
          possibleMoves[findWhatPieceIsOnASquare(pieceLocations, row, column)]
        )
      );
      setEnPassantForActivePossibleMoves(
        generateEnPassantSquares(
          possibleMoves[findWhatPieceIsOnASquare(pieceLocations, row, column)]
        )
      );
    }
  };

  useEffect(() => {
    if (aiFirstMoveCompleteProp !== aiFirstMoveComplete) {
      setPieceLocations(pieceLocationsProp);
      setPossibleMoves(possibleMovesProp);
      setBoardIsInteractable(boardIsInteractableProp);
      setAiFirstMoveComplete(aiFirstMoveCompleteProp);
    } else if (
      doTurnData &&
      (doTurnData.doTurn.possibleMoves !==
        dataFromServerAfterMove.possibleMoves ||
        doTurnData.doTurn.pieceLocations !==
          dataFromServerAfterMove.pieceLocations)
    ) {
      if (doTurnData.doTurn.humanWinner && doTurnData.doTurn.aiWinner) {
        setHumanWinner(true);
        setAiWinner(true);
      } else if (doTurnData.doTurn.humanWinner) {
        setHumanWinner(true);
      } else if (doTurnData.doTurn.aiWinner) {
        setAiWinner(true);
      } else {
        setTimeout(() => {
          setDataFromServerAfterMove({
            possibleMoves: doTurnData.doTurn.possibleMoves,
            pieceLocations: doTurnData.doTurn.pieceLocations,
          });

          setPieceLocations(doTurnData.doTurn.pieceLocations);

          setPossibleMoves(doTurnData.doTurn.possibleMoves);

          setBoardIsInteractable(true);
        }, 800);
      }
    }
  }, [
    doTurnData,
    pieceLocationsProp,
    possibleMovesProp,
    boardIsInteractableProp,
    aiFirstMoveCompleteProp,
  ]);

  return (
    <Box sx={{ backgroundColor: "#80423d" }}>
      <Container
        sx={{
          mt: "10px",
          backgroundColor: "black",
          height: "100px",
          width: "60%",
        }}
      >
        <Typography
          align="center"
          sx={{ color: "#ff9a3c", p: "15px", fontWeight: "bold" }}
        >
          {humanWinner && aiWinner
            ? "STALEMATE! THERE ARE NO POSSIBLE MOVES."
            : humanWinner
            ? "YOU WIN! COOL!"
            : aiWinner
            ? "YOU LOSE! BUMMER!"
            : message}
        </Typography>
      </Container>
      <Container sx={{ width: "60%" }}>
        <Grid container>
          <Grid container padding={0.25} margin={0}>
            <Grid item xs={1.5}></Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(0, 0);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 0, 0)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[0][0]}
                possibleMove={activePossibleMoves[0][0]}
                sideEffect={activeSideEffects[0][0] || activeEnPassant[0][0]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(0, 1);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 0, 1)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[0][1]}
                possibleMove={activePossibleMoves[0][1]}
                sideEffect={activeSideEffects[0][1] || activeEnPassant[0][1]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(0, 2);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 0, 2)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[0][2]}
                possibleMove={activePossibleMoves[0][2]}
                sideEffect={activeSideEffects[0][2] || activeEnPassant[0][2]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(0, 3);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 0, 3)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[0][3]}
                possibleMove={activePossibleMoves[0][3]}
                sideEffect={activeSideEffects[0][3] || activeEnPassant[0][3]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(0, 4);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 0, 4)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[0][4]}
                possibleMove={activePossibleMoves[0][4]}
                sideEffect={activeSideEffects[0][4] || activeEnPassant[0][4]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(0, 5);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 0, 5)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[0][5]}
                possibleMove={activePossibleMoves[0][5]}
                sideEffect={activeSideEffects[0][5] || activeEnPassant[0][5]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(0, 6);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 0, 6)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[0][6]}
                possibleMove={activePossibleMoves[0][6]}
                sideEffect={activeSideEffects[0][6] || activeEnPassant[0][6]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(0, 7);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 0, 7)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[0][7]}
                possibleMove={activePossibleMoves[0][7]}
                sideEffect={activeSideEffects[0][7] || activeEnPassant[0][7]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container padding={0.25} margin={0}>
            <Grid item xs={1.5}></Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(1, 0);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 1, 0)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[1][0]}
                possibleMove={activePossibleMoves[1][0]}
                sideEffect={activeSideEffects[1][0] || activeEnPassant[1][0]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(1, 1);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 1, 1)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[1][1]}
                possibleMove={activePossibleMoves[1][1]}
                sideEffect={activeSideEffects[1][1] || activeEnPassant[1][1]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(1, 2);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 1, 2)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[1][2]}
                possibleMove={activePossibleMoves[1][2]}
                sideEffect={activeSideEffects[1][2] || activeEnPassant[1][2]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(1, 3);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 1, 3)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[1][3]}
                possibleMove={activePossibleMoves[1][3]}
                sideEffect={activeSideEffects[1][3] || activeEnPassant[1][3]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(1, 4);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 1, 4)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[1][4]}
                possibleMove={activePossibleMoves[1][4]}
                sideEffect={activeSideEffects[1][4] || activeEnPassant[1][4]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(1, 5);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 1, 5)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[1][5]}
                possibleMove={activePossibleMoves[1][5]}
                sideEffect={activeSideEffects[1][5] || activeEnPassant[1][5]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(1, 6);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 1, 6)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[1][6]}
                possibleMove={activePossibleMoves[1][6]}
                sideEffect={activeSideEffects[1][6] || activeEnPassant[1][6]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(1, 7);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 1, 7)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[1][7]}
                possibleMove={activePossibleMoves[1][7]}
                sideEffect={activeSideEffects[1][7] || activeEnPassant[1][7]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container padding={0.25} margin={0}>
            <Grid item xs={1.5}></Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(2, 0);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 2, 0)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[2][0]}
                possibleMove={activePossibleMoves[2][0]}
                sideEffect={activeSideEffects[2][0] || activeEnPassant[2][0]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(2, 1);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 2, 1)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[2][1]}
                possibleMove={activePossibleMoves[2][1]}
                sideEffect={activeSideEffects[2][1] || activeEnPassant[2][1]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(2, 2);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 2, 2)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[2][2]}
                possibleMove={activePossibleMoves[2][2]}
                sideEffect={activeSideEffects[2][2] || activeEnPassant[2][2]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(2, 3);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 2, 3)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[2][3]}
                possibleMove={activePossibleMoves[2][3]}
                sideEffect={activeSideEffects[2][3] || activeEnPassant[2][3]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(2, 4);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 2, 4)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[2][4]}
                possibleMove={activePossibleMoves[2][4]}
                sideEffect={activeSideEffects[2][4] || activeEnPassant[2][4]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(2, 5);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 2, 5)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[2][5]}
                possibleMove={activePossibleMoves[2][5]}
                sideEffect={activeSideEffects[2][5] || activeEnPassant[2][5]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(2, 6);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 2, 6)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[2][6]}
                possibleMove={activePossibleMoves[2][6]}
                sideEffect={activeSideEffects[2][6] || activeEnPassant[2][6]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(2, 7);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 2, 7)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[2][7]}
                possibleMove={activePossibleMoves[2][7]}
                sideEffect={activeSideEffects[2][7] || activeEnPassant[2][7]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container padding={0.25} margin={0}>
            <Grid item xs={1.5}></Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(3, 0);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 3, 0)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[3][0]}
                possibleMove={activePossibleMoves[3][0]}
                sideEffect={activeSideEffects[3][0] || activeEnPassant[3][0]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(3, 1);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 3, 1)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[3][1]}
                possibleMove={activePossibleMoves[3][1]}
                sideEffect={activeSideEffects[3][1] || activeEnPassant[3][1]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(3, 2);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 3, 2)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[3][2]}
                possibleMove={activePossibleMoves[3][2]}
                sideEffect={activeSideEffects[3][2] || activeEnPassant[3][2]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(3, 3);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 3, 3)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[3][3]}
                possibleMove={activePossibleMoves[3][3]}
                sideEffect={activeSideEffects[3][3] || activeEnPassant[3][3]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(3, 4);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 3, 4)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[3][4]}
                possibleMove={activePossibleMoves[3][4]}
                sideEffect={activeSideEffects[3][4] || activeEnPassant[3][4]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(3, 5);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 3, 5)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[3][5]}
                possibleMove={activePossibleMoves[3][5]}
                sideEffect={activeSideEffects[3][5] || activeEnPassant[3][5]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(3, 6);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 3, 6)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[3][6]}
                possibleMove={activePossibleMoves[3][6]}
                sideEffect={activeSideEffects[3][6] || activeEnPassant[3][6]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(3, 7);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 3, 7)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[3][7]}
                possibleMove={activePossibleMoves[3][7]}
                sideEffect={activeSideEffects[3][7] || activeEnPassant[3][7]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container padding={0.25} margin={0}>
            <Grid item xs={1.5}></Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(4, 0);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 4, 0)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[4][0]}
                possibleMove={activePossibleMoves[4][0]}
                sideEffect={activeSideEffects[4][0] || activeEnPassant[4][0]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(4, 1);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 4, 1)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[4][1]}
                possibleMove={activePossibleMoves[4][1]}
                sideEffect={activeSideEffects[4][1] || activeEnPassant[4][1]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(4, 2);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 4, 2)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[4][2]}
                possibleMove={activePossibleMoves[4][2]}
                sideEffect={activeSideEffects[4][2] || activeEnPassant[4][2]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(4, 3);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 4, 3)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[4][3]}
                possibleMove={activePossibleMoves[4][3]}
                sideEffect={activeSideEffects[4][3] || activeEnPassant[4][3]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(4, 4);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 4, 4)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[4][4]}
                possibleMove={activePossibleMoves[4][4]}
                sideEffect={activeSideEffects[4][4] || activeEnPassant[4][4]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(4, 5);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 4, 5)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[4][5]}
                possibleMove={activePossibleMoves[4][5]}
                sideEffect={activeSideEffects[4][5] || activeEnPassant[4][5]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(4, 6);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 4, 6)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[4][6]}
                possibleMove={activePossibleMoves[4][6]}
                sideEffect={activeSideEffects[4][6] || activeEnPassant[4][6]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(4, 7);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 4, 7)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[4][7]}
                possibleMove={activePossibleMoves[4][7]}
                sideEffect={activeSideEffects[4][7] || activeEnPassant[4][7]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container padding={0.25} margin={0}>
            <Grid item xs={1.5}></Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(5, 0);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 5, 0)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[5][0]}
                possibleMove={activePossibleMoves[5][0]}
                sideEffect={activeSideEffects[5][0] || activeEnPassant[5][0]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(5, 1);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 5, 1)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[5][1]}
                possibleMove={activePossibleMoves[5][1]}
                sideEffect={activeSideEffects[5][1] || activeEnPassant[5][1]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(5, 2);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 5, 2)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[5][2]}
                possibleMove={activePossibleMoves[5][2]}
                sideEffect={activeSideEffects[5][2] || activeEnPassant[5][2]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(5, 3);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 5, 3)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[5][3]}
                possibleMove={activePossibleMoves[5][3]}
                sideEffect={activeSideEffects[5][3] || activeEnPassant[5][3]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(5, 4);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 5, 4)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[5][4]}
                possibleMove={activePossibleMoves[5][4]}
                sideEffect={activeSideEffects[5][4] || activeEnPassant[5][4]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(5, 5);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 5, 5)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[5][5]}
                possibleMove={activePossibleMoves[5][5]}
                sideEffect={activeSideEffects[5][5] || activeEnPassant[5][5]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(5, 6);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 5, 6)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[5][6]}
                possibleMove={activePossibleMoves[5][6]}
                sideEffect={activeSideEffects[5][6] || activeEnPassant[5][6]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(5, 7);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 5, 7)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[5][7]}
                possibleMove={activePossibleMoves[5][7]}
                sideEffect={activeSideEffects[5][7] || activeEnPassant[5][7]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container padding={0.25} margin={0}>
            <Grid item xs={1.5}></Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(6, 0);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 6, 0)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[6][0]}
                possibleMove={activePossibleMoves[6][0]}
                sideEffect={activeSideEffects[6][0] || activeEnPassant[6][0]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(6, 1);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 6, 1)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[6][1]}
                possibleMove={activePossibleMoves[6][1]}
                sideEffect={activeSideEffects[6][1] || activeEnPassant[6][1]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(6, 2);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 6, 2)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[6][2]}
                possibleMove={activePossibleMoves[6][2]}
                sideEffect={activeSideEffects[6][2] || activeEnPassant[6][2]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(6, 3);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 6, 3)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[6][3]}
                possibleMove={activePossibleMoves[6][3]}
                sideEffect={activeSideEffects[6][3] || activeEnPassant[6][3]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(6, 4);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 6, 4)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[6][4]}
                possibleMove={activePossibleMoves[6][4]}
                sideEffect={activeSideEffects[6][4] || activeEnPassant[6][4]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(6, 5);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 6, 5)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[6][5]}
                possibleMove={activePossibleMoves[6][5]}
                sideEffect={activeSideEffects[6][5] || activeEnPassant[6][5]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(6, 6);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 6, 6)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[6][6]}
                possibleMove={activePossibleMoves[6][6]}
                sideEffect={activeSideEffects[6][6] || activeEnPassant[6][6]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(6, 7);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 6, 7)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[6][7]}
                possibleMove={activePossibleMoves[6][7]}
                sideEffect={activeSideEffects[6][7] || activeEnPassant[6][7]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container padding={0.25} margin={0}>
            <Grid item xs={1.5}></Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(7, 0);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 7, 0)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[7][0]}
                possibleMove={activePossibleMoves[7][0]}
                sideEffect={activeSideEffects[7][0] || activeEnPassant[7][0]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(7, 1);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 7, 1)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[7][1]}
                possibleMove={activePossibleMoves[7][1]}
                sideEffect={activeSideEffects[7][1] || activeEnPassant[7][1]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(7, 2);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 7, 2)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[7][2]}
                possibleMove={activePossibleMoves[7][2]}
                sideEffect={activeSideEffects[7][2] || activeEnPassant[7][2]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(7, 3);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 7, 3)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[7][3]}
                possibleMove={activePossibleMoves[7][3]}
                sideEffect={activeSideEffects[7][3] || activeEnPassant[7][3]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(7, 4);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 7, 4)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[7][4]}
                possibleMove={activePossibleMoves[7][4]}
                sideEffect={activeSideEffects[7][4] || activeEnPassant[7][4]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(7, 5);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 7, 5)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[7][5]}
                possibleMove={activePossibleMoves[7][5]}
                sideEffect={activeSideEffects[7][5] || activeEnPassant[7][5]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(7, 6);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 7, 6)}
                humanColor={humanColorProp}
                backgroundColor="#ff6f3c"
                selected={selected[7][6]}
                possibleMove={activePossibleMoves[7][6]}
                sideEffect={activeSideEffects[7][6] || activeEnPassant[7][6]}
              />
            </Grid>
            <Grid
              item
              padding={0.25}
              margin={0}
              onClick={() => {
                handleClickSpot(7, 7);
              }}
            >
              <GamePiece
                piece={findWhatPieceIsOnASquare(pieceLocations, 7, 7)}
                humanColor={humanColorProp}
                backgroundColor="#ff9a3c"
                selected={selected[7][7]}
                possibleMove={activePossibleMoves[7][7]}
                sideEffect={activeSideEffects[7][7] || activeEnPassant[7][7]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GameBoard;
