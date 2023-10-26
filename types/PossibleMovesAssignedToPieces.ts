import PossibleMove from "./PossibleMove";

type PossibleMovesAssignedToPieces = {
  pawnA?: PossibleMove[];
  pawnB?: PossibleMove[];
  pawnC?: PossibleMove[];
  pawnD?: PossibleMove[];
  pawnE?: PossibleMove[];
  pawnF?: PossibleMove[];
  pawnG?: PossibleMove[];
  pawnH?: PossibleMove[];
  rookA?: PossibleMove[];
  rookB?: PossibleMove[];
  knightA?: PossibleMove[];
  knightB?: PossibleMove[];
  bishopA?: PossibleMove[];
  bishopB?: PossibleMove[];
  queen?: PossibleMove[];
  king?: PossibleMove[];
};

export default PossibleMovesAssignedToPieces;
