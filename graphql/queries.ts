import { gql } from "@apollo/client";

const GET_GAME = gql`
  query GetGame($humanPlayerId: String!) {
    pieceLocations {
        humanColor
        aiColor
        humanPawnA: {
            row
            column
            captured
        },
        humanPawnB: {
            row
            column
            captured
        },
        humanPawnC: {
            row
            column
            captured
        },
        humanPawnD: {
            row
            column
            captured
        },
        humanPawnE: {
            row
            column
            captured
        },
        humanPawnF: {
            row
            column
            captured
        },
        humanPawnG: {
            row
            column
            captured
        },
        humanPawnH: {
            row
            column
            captured
        },
        humanKing: {
            row
            column
            captured
        },
        humanQueen: {
            row
            column
            captured
        },
        humanRookA: {
            row
            column
            captured
        },
        humanRookB: {
            row
            column
            captured
        },
        humanKnightA: {
            row
            column
            captured
        },
        humanKnightB: {
            row
            column
            captured
        },
        humanBishopA: {
            row
            column
            captured
        },
        humanBishopB: {
            row
            column
            captured
        },
        aiPawnA: {
            row
            column
            captured
        },
        aiPawnB: {
            row
            column
            captured
        },
        aiPawnC: {
            row
            column
            captured
        },
        aiPawnD: {
            row
            column
            captured
        },
        aiPawnE: {
            row
            column
            captured
        },
        aiPawnF: {
            row
            column
            captured
        },
        aiPawnG: {
            row
            column
            captured
        },
        aiPawnH: {
            row
            column
            captured
        },
        aiKing: {
            row
            column
            captured
        },
        aiQueen: {
            row
            column
            captured
        },
        aiRookA: {
            row
            column
            captured
        },
        aiRookB: {
            row
            column
            captured
        },
        aiKnightA: {
            row
            column
            captured
        },
        aiKnightB: {
            row
            column
            captured
        },
        aiBishopA: {
            row
            column
            captured
        },
        aiBishopB: {
            row
            column
            captured
        },
        matrix
    }
    possibleMoves {
        pawnA
        pawnB
        pawnC
        pawnD
        pawnE
        pawnF
        pawnG
        pawnH
        rookA
        rookB
        knightA
        knightB
        bishopA
        bishopB
        queen
        king
    }
    humanWinner
    aiWinner
  }
`;

const CREATE_GAME = gql`
    mutation CreateGame($humanPlayerId: String!) {
        pieceLocations {
            humanColor
            aiColor
            humanPawnA: {
                row
                column
                captured
            },
            humanPawnB: {
                row
                column
                captured
            },
            humanPawnC: {
                row
                column
                captured
            },
            humanPawnD: {
                row
                column
                captured
            },
            humanPawnE: {
                row
                column
                captured
            },
            humanPawnF: {
                row
                column
                captured
            },
            humanPawnG: {
                row
                column
                captured
            },
            humanPawnH: {
                row
                column
                captured
            },
            humanKing: {
                row
                column
                captured
            },
            humanQueen: {
                row
                column
                captured
            },
            humanRookA: {
                row
                column
                captured
            },
            humanRookB: {
                row
                column
                captured
            },
            humanKnightA: {
                row
                column
                captured
            },
            humanKnightB: {
                row
                column
                captured
            },
            humanBishopA: {
                row
                column
                captured
            },
            humanBishopB: {
                row
                column
                captured
            },
            aiPawnA: {
                row
                column
                captured
            },
            aiPawnB: {
                row
                column
                captured
            },
            aiPawnC: {
                row
                column
                captured
            },
            aiPawnD: {
                row
                column
                captured
            },
            aiPawnE: {
                row
                column
                captured
            },
            aiPawnF: {
                row
                column
                captured
            },
            aiPawnG: {
                row
                column
                captured
            },
            aiPawnH: {
                row
                column
                captured
            },
            aiKing: {
                row
                column
                captured
            },
            aiQueen: {
                row
                column
                captured
            },
            aiRookA: {
                row
                column
                captured
            },
            aiRookB: {
                row
                column
                captured
            },
            aiKnightA: {
                row
                column
                captured
            },
            aiKnightB: {
                row
                column
                captured
            },
            aiBishopA: {
                row
                column
                captured
            },
            aiBishopB: {
                row
                column
                captured
            },
            matrix
        }
        possibleMoves {
            pawnA
            pawnB
            pawnC
            pawnD
            pawnE
            pawnF
            pawnG
            pawnH
            rookA
            rookB
            knightA
            knightB
            bishopA
            bishopB
            queen
            king
        }
    }
`;

export { GET_GAME, CREATE_GAME };
