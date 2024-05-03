import React, { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import { Button, Container, Typography } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import GET_GAME from "@/graphql/queries";
import { CREATE_GAME } from "@/graphql/mutations";

const Game = () => {
  const [start, setStart] = useState(true);

  // const {
  //   loading: loadGameLoading,
  //   error: loadGameError,
  //   data: loadGameData,
  // } = useQuery(GET_GAME, {
  //   variables: { humanPlayerId: "03fdbefb-5d47-460c-857f-6890496d6fe8" },
  // }); // TODO human player ID variable

  const [
    newGame,
    {
      loading: createGameLoading,
      error: createGameError,
      data: createGameData,
    },
  ] = useMutation(CREATE_GAME);

  const handleNewGame = () => {
    newGame();
    setStart(false);
  };

  const handleLoadGame = () => {
    setStart(false);
  };

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
        {/* {loadGameLoading ||
        loadGameError ||
        loadGameData.humanWinner ||
        loadGameData.aiWinner ||
        !loadGameData ? (
          <Button
            onClick={handleLoadGame}
            variant="outlined"
            sx={{ margin: "10px" }}
          >
            Load Game
          </Button>
        ) : (
          <></>
        )} */}
      </>
    );
  }

  // if (loadGameData) {
  //   return (
  //     <GameBoard
  //       pieceLocationsProp={loadGameData.pieceLocations}
  //       possibleMovesProp={loadGameData.possibleMoves}
  //       humanWinnerProp={loadGameData.humanWinner}
  //       aiWinnerProp={loadGameData.aiWinner}
  //       humanColorProp={loadGameData.humanColor}
  //     />
  //   );
  // }

  if (createGameData) {
    return (
      <>
        <Button
          onClick={handleNewGame}
          sx={{
            m: "15px",
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
        <Container>
          <GameBoard
            pieceLocationsProp={createGameData.createGame.pieceLocations}
            possibleMovesProp={createGameData.createGame.possibleMoves}
            humanWinnerProp={createGameData.createGame.humanWinner}
            aiWinnerProp={createGameData.createGame.aiWinner}
            humanColorProp={createGameData.createGame.humanColor}
            humanPlayerIdProp={createGameData.createGame.humanPlayerId}
          />
        </Container>
      </>
    );
  }

  if (createGameError) {
    return <>{JSON.stringify(createGameError)}</>;
  }
  return <></>;
};

export default Game;
