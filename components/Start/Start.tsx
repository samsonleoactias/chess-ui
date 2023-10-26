import { Button } from "@mui/material";
import { useRouter } from "next/router";

// TODO do not display load game if there is no game to load

const Start = () => {
  const router = useRouter();

  const handleNewGame = () => {
    router.push("/game");
  };

  return (
    <>
      <Button variant="outlined" sx={{ margin: "10px" }}>
        New Game
      </Button>
      <Button variant="outlined" sx={{ margin: "10px" }}>
        Load Game
      </Button>
    </>
  );
};

export default Start;
