import { Piece, Icons } from "@/types";

const icons: Icons = {
  humanPawnA: "Pa",
  humanPawnB: "Pa",
  humanPawnC: "Pa",
  humanPawnD: "Pa",
  humanPawnE: "Pa",
  humanPawnF: "Pa",
  humanPawnG: "Pa",
  humanPawnH: "Pa",
  humanRookA: "Ro",
  humanRookB: "Ro",
  humanKnightA: "Kn",
  humanKnightB: "Kn",
  humanBishopA: "Bi",
  humanBishopB: "Bi",
  humanQueen: "Qu",
  humanKing: "Ki",
  aiPawnA: "Pa",
  aiPawnB: "Pa",
  aiPawnC: "Pa",
  aiPawnD: "Pa",
  aiPawnE: "Pa",
  aiPawnF: "Pa",
  aiPawnG: "Pa",
  aiPawnH: "Pa",
  aiRookA: "Ro",
  aiRookB: "Ro",
  aiKnightA: "Kn",
  aiKnightB: "Kn",
  aiBishopA: "Bi",
  aiBishopB: "Bi",
  aiQueen: "Qu",
  aiKing: "Ki",
  none: "",
};

// TODO use actual images??

const makePieceIcon = (piece: Piece) => {
  return icons[piece];
};

export default makePieceIcon;
