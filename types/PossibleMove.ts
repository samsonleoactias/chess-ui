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
  enPassantCapture?: Piece;
};

export default PossibleMove;
