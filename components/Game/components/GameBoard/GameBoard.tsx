import { Color } from "../../../../types";
import { Grid } from "@mui/material";

type GameBoardProps = {
  humanColor: Color;
};

const GameBoard = (props: GameBoardProps) => {
  const { humanColor } = props;

  const aiColor = humanColor === Color.White ? Color.Black : Color.White;

  return (
    <>
      <Grid container spacing={1}>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GameBoard;
