import { gql } from "@apollo/client";

const CREATE_GAME = gql`
  mutation CreateGame($humanPlayerId: String!) {
    createGame(humanPlayerId: $humanPlayerId) {
      humanColor
      pieceLocations {
        humanPawnA {
          row
          column
          captured
        }
        humanPawnB {
          row
          column
          captured
        }
        humanPawnC {
          row
          column
          captured
        }
        humanPawnD {
          row
          column
          captured
        }
        humanPawnE {
          row
          column
          captured
        }
        humanPawnF {
          row
          column
          captured
        }
        humanPawnG {
          row
          column
          captured
        }
        humanPawnH {
          row
          column
          captured
        }
        humanKing {
          row
          column
          captured
        }
        humanQueen {
          row
          column
          captured
        }
        humanRookA {
          row
          column
          captured
        }
        humanRookB {
          row
          column
          captured
        }
        humanKnightA {
          row
          column
          captured
        }
        humanKnightB {
          row
          column
          captured
        }
        humanBishopA {
          row
          column
          captured
        }
        humanBishopB {
          row
          column
          captured
        }
        aiPawnA {
          row
          column
          captured
        }
        aiPawnB {
          row
          column
          captured
        }
        aiPawnC {
          row
          column
          captured
        }
        aiPawnD {
          row
          column
          captured
        }
        aiPawnE {
          row
          column
          captured
        }
        aiPawnF {
          row
          column
          captured
        }
        aiPawnG {
          row
          column
          captured
        }
        aiPawnH {
          row
          column
          captured
        }
        aiKing {
          row
          column
          captured
        }
        aiQueen {
          row
          column
          captured
        }
        aiRookA {
          row
          column
          captured
        }
        aiRookB {
          row
          column
          captured
        }
        aiKnightA {
          row
          column
          captured
        }
        aiKnightB {
          row
          column
          captured
        }
        aiBishopA {
          row
          column
          captured
        }
        aiBishopB {
          row
          column
          captured
        }
        matrix
      }
      possibleMoves {
        humanPawnA {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnB {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnC {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnD {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnE {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnF {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnG {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnH {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanRookA {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanRookB {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanKnightA {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanKnightB {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanBishopA {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanBishopB {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanQueen {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanKing {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
      }
    }
  }
`;

const DO_TURN = gql`
  mutation DoTurn($humanPlayerId: String!, $piece: String!, $move: String!) {
    doTurn(humanPlayerId: $humanPlayerId, piece: $piece, move: $move) {
      humanWinner
      aiWinner
      humanColor
      pieceLocations {
        humanPawnA {
          row
          column
          captured
        }
        humanPawnB {
          row
          column
          captured
        }
        humanPawnC {
          row
          column
          captured
        }
        humanPawnD {
          row
          column
          captured
        }
        humanPawnE {
          row
          column
          captured
        }
        humanPawnF {
          row
          column
          captured
        }
        humanPawnG {
          row
          column
          captured
        }
        humanPawnH {
          row
          column
          captured
        }
        humanKing {
          row
          column
          captured
        }
        humanQueen {
          row
          column
          captured
        }
        humanRookA {
          row
          column
          captured
        }
        humanRookB {
          row
          column
          captured
        }
        humanKnightA {
          row
          column
          captured
        }
        humanKnightB {
          row
          column
          captured
        }
        humanBishopA {
          row
          column
          captured
        }
        humanBishopB {
          row
          column
          captured
        }
        aiPawnA {
          row
          column
          captured
        }
        aiPawnB {
          row
          column
          captured
        }
        aiPawnC {
          row
          column
          captured
        }
        aiPawnD {
          row
          column
          captured
        }
        aiPawnE {
          row
          column
          captured
        }
        aiPawnF {
          row
          column
          captured
        }
        aiPawnG {
          row
          column
          captured
        }
        aiPawnH {
          row
          column
          captured
        }
        aiKing {
          row
          column
          captured
        }
        aiQueen {
          row
          column
          captured
        }
        aiRookA {
          row
          column
          captured
        }
        aiRookB {
          row
          column
          captured
        }
        aiKnightA {
          row
          column
          captured
        }
        aiKnightB {
          row
          column
          captured
        }
        aiBishopA {
          row
          column
          captured
        }
        aiBishopB {
          row
          column
          captured
        }
        matrix
      }
      possibleMoves {
        humanPawnA {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnB {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnC {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnD {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnE {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnF {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnG {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanPawnH {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanRookA {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanRookB {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanKnightA {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanKnightB {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanBishopA {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanBishopB {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanQueen {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
        humanKing {
          location {
            row
            column
          }
          sideEffects {
            piece
            row
            column
          }
        }
      }
    }
  }
`;

export { CREATE_GAME, DO_TURN };
