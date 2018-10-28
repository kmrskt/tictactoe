/**
 * This program is a boliler plate code for the famous tic tac toe game
 * Here box represents one placeholder for either X or a 0
 * We have a 2D array to represent the arrangement of X or O is a grid
 * 0 -> empty box
 * 1 -> box with X
 * 2 -> box with O
 *
 * Below are the tasks which needs to be completed
 * Imagine you are playing with Computer so every alternate move should be by Computer
 * X -> player
 * O -> Computer
 *
 * Winner has to be decided and has to be flashed
 *
 * Extra points will be given for the Creativity
 *
 * Use of Google is not encouraged
 *
 */
const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';

    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function getRandomNumber() {
    return Math.floor(Math.random()*3);
}


function cpuMove() {
    var rowIdx = getRandomNumber();
    var colIdx = getRandomNumber();
    if(!grid[colIdx][rowIdx]) {
        let newValue = 2;
        grid[colIdx][rowIdx] = newValue;
        renderMainGrid();
    } else {
        cpuMove();
    }
}




function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
      let newValue = 1;
      grid[colIdx][rowIdx] = newValue;


    console.log(grid);
    renderMainGrid();
    cpuMove()
    addClickHandlers();

}

function addClickHandlers() {
    renderMainGrid();
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
    showWinner();

}

function showWinner()
{

   var res = winnerCheck(1);
   if(res)
   {

     alert("Player is wiiner")
     return;
   }
   var res =winnerCheck(2);
   if(res)
   {

     alert("CPU is wiiner")
     return;
   }

   var flag=0;
   for (var i = 0; i < 3; i++)
   {
     for(var j =0; j<3;j++)
     {
       if(grid[i][j]!=0)
       {

       }
       else {
         flag =1;
       }
     }

   }
   if(flag==0)
   {

     alert("match is tie");
   }

}

function winnerCheck(value)
{
  var p=0;
  for(var i =0;i<3;i++)
  {
    if(grid[i][0]==value && grid[i][1]==value && grid[i][2]==value)
    {
      p=1;
      return p;
    }
  }

  for(var i =0;i<3;i++)
  {
    if(grid[0][i]==value && grid[1][i]==value && grid[2][i]==value)
    {
      p=1;
      return p;
    }
  }

  if(grid[0][0]==value && grid[1][1]==value && grid[2][2]==value)
  {
    p=1;
    return p;
  }

  if(grid[2][0]==value && grid[1][1]==value && grid[0][2]==value)
  {
    p=1;
    return p;
  }

  return p;
}

initializeGrid();
cpuMove();
renderMainGrid();
addClickHandlers();
