const generateSelectedSquare = (
  selectedRow?: number,
  selectedColumn?: number
): boolean[][] => {
  let squares: boolean[][] = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];

  if (selectedRow !== undefined && selectedColumn !== undefined) {
    squares[selectedRow][selectedColumn] = true;
  }

  return squares;
};

export default generateSelectedSquare;
