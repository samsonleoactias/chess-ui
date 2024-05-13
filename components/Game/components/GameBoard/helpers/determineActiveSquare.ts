const determineActiveSquare = (
  selected: boolean[][]
): { row: number; column: number } => {
  let rowIndex = selected.findIndex((row) => row.includes(true));
  let columnIndex = selected[rowIndex].findIndex((column) => column === true);

  return { row: rowIndex, column: columnIndex };
};

export default determineActiveSquare;
