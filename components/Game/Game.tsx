import React, { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { GET_GAME, CREATE_GAME } from "@/graphql/queries";

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
    newGame({
      variables: { humanPlayerId: "03fdbefb-5d47-460c-857f-6890496d6fe8" },
    });
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
          variant="outlined"
          sx={{ margin: "10px" }}
        >
          New Game
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
      <GameBoard
        pieceLocationsProp={createGameData.createGame.pieceLocations}
        possibleMovesProp={createGameData.createGame.possibleMoves}
        humanWinnerProp={createGameData.createGame.humanWinner}
        aiWinnerProp={createGameData.createGame.aiWinner}
        humanColorProp={createGameData.createGame.humanColor}
      />
    );
  }

  if (createGameError) {
    return <>{JSON.stringify(createGameError)}</>;
  }
  return <></>;
};

export default Game;
