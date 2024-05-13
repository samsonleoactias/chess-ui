import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import { Box, Button, Container, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { AI_FIRST_MOVE, CREATE_GAME } from "@/graphql/mutations";
import { ImageCredit } from "./components";

const Game = () => {
  const [start, setStart] = useState<boolean>(true);
  const [useAiFirstMoveData, setUseAiFirstMoveData] = useState<boolean>(false);
  const [newGameIsClickable, setNewGameIsClickable] = useState<boolean>(true);

  const [
    newGame,
    {
      loading: createGameLoading,
      error: createGameError,
      data: createGameData,
    },
  ] = useMutation(CREATE_GAME);

  const [
    aiFirstMove,
    {
      loading: aiFirstMoveLoading,
      error: aiFirstMoveError,
      data: aiFirstMoveData,
    },
  ] = useMutation(AI_FIRST_MOVE);

  const handleNewGame = () => {
    setNewGameIsClickable(false);
    setUseAiFirstMoveData(false);
    setStart(true);
    newGame();
    setTimeout(() => {
      setNewGameIsClickable(true);
    }, 1000);
  };

  useEffect(() => {
    if (
      start &&
      createGameData &&
      !useAiFirstMoveData &&
      createGameData.createGame.humanColor === "BLACK"
    ) {
      setStart(false);
      aiFirstMove({
        variables: {
          humanPlayerId: createGameData.createGame.humanPlayerId,
        },
      });
    } else if (
      start &&
      createGameData &&
      createGameData.createGame.humanColor === "WHITE"
    ) {
      setStart(false);
    } else if (
      aiFirstMoveData &&
      !useAiFirstMoveData &&
      !aiFirstMoveLoading &&
      !createGameLoading &&
      createGameData.createGame.humanColor === "BLACK"
    ) {
      setTimeout(() => {
        setUseAiFirstMoveData(true);
      }, 800);
    }
  }, [
    aiFirstMoveData,
    createGameData,
    start,
    useAiFirstMoveData,
    aiFirstMoveLoading,
    createGameLoading,
    aiFirstMove,
  ]);

  if (start) {
    return (
      <>
        <Button
          onClick={handleNewGame}
          sx={{
            m: "15px",
            mt: "25px",
            objectPosition: "left top",
            float: "left",
            backgroundColor: "#ff9a3c",
            height: "50px",
            border: 4,
            borderColor: "black",
            width: "200px",
          }}
        >
          <Typography
            align="center"
            sx={{ color: "black", p: "15px", fontWeight: "bold" }}
          >
            New Game
          </Typography>
        </Button>
        <ImageCredit />
      </>
    );
  }

  if (createGameData) {
    return (
      <Box sx={{ backgroundColor: "#80423d" }}>
        <Button
          onClick={handleNewGame}
          disabled={!newGameIsClickable}
          sx={{
            m: "15px",
            objectPosition: "left top",
            float: "left",
            backgroundColor: newGameIsClickable ? "#ff9a3c" : "gray",
            height: "50px",
            border: 4,
            borderColor: newGameIsClickable ? "black" : "gray",
            width: "200px",
          }}
        >
          <Typography
            align="center"
            sx={{ color: "black", p: "15px", fontWeight: "bold" }}
          >
            New Game
          </Typography>
        </Button>
        <Container>
          <GameBoard
            pieceLocationsProp={
              useAiFirstMoveData
                ? aiFirstMoveData.aiFirstMove.pieceLocations
                : createGameData.createGame.pieceLocations
            }
            possibleMovesProp={
              useAiFirstMoveData
                ? aiFirstMoveData.aiFirstMove.possibleMoves
                : createGameData.createGame.possibleMoves
            }
            humanWinnerProp={createGameData.createGame.humanWinner}
            aiWinnerProp={createGameData.createGame.aiWinner}
            humanColorProp={createGameData.createGame.humanColor}
            humanPlayerIdProp={createGameData.createGame.humanPlayerId}
            boardIsInteractableProp={
              useAiFirstMoveData
                ? true
                : createGameData.createGame.humanColor === "WHITE"
                ? true
                : false
            }
            aiFirstMoveCompleteProp={useAiFirstMoveData}
          />
        </Container>
        <ImageCredit />
      </Box>
    );
  }

  if (createGameError) {
    return <>{JSON.stringify(createGameError)}</>;
  }
  return <></>;
};

export default Game;
