import Piece from "./Piece";

type PossibleMove = {
  location: {
    row: number;
    column: number;
  };
  sideEffects?: [
    {
      piece: Piece;
      row: number;
      column: number;
    }
  ];
};

export default PossibleMove;
