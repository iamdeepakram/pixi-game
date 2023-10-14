import React, { useState, useEffect } from 'react';
import { Stage, Container} from '@pixi/react';
import GridCell from './components/GridCell';


const totalRows = 25;
const totalCols = 10;
const cellSize = 50;

function getRandomColor() {
  return Math.floor(Math.random() * 16777215);
}

const App = () => {

  const [orientation, setOrientation] = useState(getInitialOrientation());
  const [grid, setGrid] = useState([]);

  function getInitialOrientation() {
    return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  }

  const initializeGrid = () => {
    const newGrid = [];
    for (let row = 0; row < totalRows; row++) {
      const newRow = [];
      for (let col = 0; col < totalCols; col++) {
        newRow.push({
          color: getRandomColor(),
          text: `(${row + 1}, ${col + 1})`,
        });
      }
      newGrid.push(newRow);
    }
    setGrid(newGrid);
  };
  const handleOrientationChange = () => {
    setOrientation(getInitialOrientation());
    initializeGrid();
  };
  
  useEffect(() => {
    initializeGrid();
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return (
    <div>
      <Stage
        width={orientation === 'portrait' ? totalCols * cellSize : totalRows * cellSize}
        height={orientation === 'portrait' ? totalRows * cellSize : totalCols * cellSize}
      >
        <Container>
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <Container
                key={`cell-${rowIndex}-${colIndex}`}
                x={orientation === 'portrait' ? colIndex * cellSize : rowIndex * cellSize}
                y={orientation === 'portrait' ? rowIndex * cellSize : colIndex * cellSize}
              >
              <GridCell x={5} y={5} cellSize={cellSize} color={cell.color} text={cell.text} />
              
              </Container>
            ))
          )}
        </Container>
      </Stage>
      <p>Images Count: {totalRows * totalCols}</p>
      <p>Image Size: {cellSize}x{cellSize}</p>
    </div>
  );
};

export default App;
