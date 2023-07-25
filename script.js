function  createOneColumn() {
    for (let i = 1; i <= 16; i++) {
      // Create a div element:
      const height = document.createElement("div");
      height.classList.add("lineOfSquares");
      //add element to grid
      document.getElementById("fullSquare").appendChild(height);
    }
};
function createRow(){
    for (let i = 1; i <= 16; i++) {
        // Create a div element:
        const line = document.createElement("div");
    
        //add element to grid
        const allElements = document.getElementsByClassName("lineOfSquares");
    
        allElements[i].appendChild(line);
      }
};


function createGrid() {
    createOneColumn();
    for(let i = 1; i <= 16; i++){
        createRow();
    }
};

createGrid();

// function hoverColorEffect (){
//     function mouseOver(){
//         document.getElementsByClassName(".lineOfSquares")
//     }
// }