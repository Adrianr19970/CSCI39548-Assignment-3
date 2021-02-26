let numRows = 0;
let numCols = 0;
let colorSelected;

// Adds a row
function addR() {
    alert("Clicked Add Row")
}

// Adds a column
function addC() {
    alert("Clicked Add Column")
}

// Removes a Row
function removeR() {
    alert("Clicked Remove Row")
}

// Remove a Column
function removeC() {
    alert("Clicked Remove Col")
}

// Sets global variable for selected color
function selected() {
    colorSelected = document.getElementById("SelectedID").value;
    console.log(colorSelected);
}

// Fills all uncolored squares with a specified color
function fillU() {
    alert("Clicked Fill All Uncolored")
}

// Sets all squares to the specified color
function fill() {
    alert("Clicked Fill All")
}

// Clears all squares
function clearAll() {
    alert("Clicked Clear All")
}

