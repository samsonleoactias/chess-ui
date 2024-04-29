import PossibleMove from "./PossibleMove";

type PossibleMovesAssignedToPieces = {
  humanPawnA?: PossibleMove[];
  humanPawnB?: PossibleMove[];
  humanPawnC?: PossibleMove[];
  humanPawnD?: PossibleMove[];
  humanPawnE?: PossibleMove[];
  humanPawnF?: PossibleMove[];
  humanPawnG?: PossibleMove[];
  humanPawnH?: PossibleMove[];
  humanRookA?: PossibleMove[];
  humanRookB?: PossibleMove[];
  humanKnightA?: PossibleMove[];
  humanKnightB?: PossibleMove[];
  humanBishopA?: PossibleMove[];
  humanBishopB?: PossibleMove[];
  humanQueen?: PossibleMove[];
  humanKing?: PossibleMove[];
  aiPawnA?: PossibleMove[];
  aiPawnB?: PossibleMove[];
  aiPawnC?: PossibleMove[];
  aiPawnD?: PossibleMove[];
  aiPawnE?: PossibleMove[];
  aiPawnF?: PossibleMove[];
  aiPawnG?: PossibleMove[];
  aiPawnH?: PossibleMove[];
  aiRookA?: PossibleMove[];
  aiRookB?: PossibleMove[];
  aiKnightA?: PossibleMove[];
  aiKnightB?: PossibleMove[];
  aiBishopA?: PossibleMove[];
  aiBishopB?: PossibleMove[];
  aiQueen?: PossibleMove[];
  aiKing?: PossibleMove[];
  none?: PossibleMove[];
};

export default PossibleMovesAssignedToPieces;
