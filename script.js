let gridSize = 16;

function  createOneColumn(gridSize) {
    for (let i = 0; i < gridSize; i++) {
      // Create a div element:
      const height = document.createElement("div");
      height.classList.add("lineOfSquares");
      //add element to grid
      document.getElementById("fullSquare").appendChild(height);
    }
  for (let i = 0; i < gridSize; i++) {
    // Create a div element:
    const line = document.createElement("div");

    //add element to grid
    const allElements = document.getElementsByClassName("lineOfSquares");

    allElements[i].appendChild(line);
  }
}

function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++){
        createOneColumn(gridSize);
    }
}

createGrid(gridSize);
