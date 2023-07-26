let lastSizeOfGrid;
function chooseSize() {
  let sizeOfGrid = prompt("Please choose the size of grid:");
  if (lastSizeOfGrid != sizeOfGrid) {
    lastSizeOfGrid = sizeOfGrid;
    if (sizeOfGrid <= 100) {
      function createOneColumn() {
        for (let i = 1; i <= sizeOfGrid; i++) {
          // Create a div element:
          const height = document.createElement("div");
          height.classList.add("lineOfSquares");
          //add element to grid
          document.getElementById("fullSquare").appendChild(height);
        }
      }
      function createRow() {
        for (let i = 1; i <= sizeOfGrid; i++) {
          // Create a div element:
          const line = document.createElement("div");

          line.classList.add("oneSquare");

          //add element to grid
          const allElements = document.getElementsByClassName("lineOfSquares");

          allElements[i].appendChild(line);
        }
      }

      function createGrid() {
        createOneColumn();
        for (let i = 1; i <= sizeOfGrid; i++) {
          createRow();
        }
      }

      createGrid();

      const allSquares = document.getElementsByClassName("oneSquare");

      for (const square of allSquares) {
        square.addEventListener("mouseover", function () {
          square.style.backgroundColor = "gray";
        });
      }
    } else {
      return alert("Number is too big"), location.reload();
    }
  } else {
    alert("Change the number please");
    location.reload();
  }
}

function reloadGame() {
  location.reload();
}
