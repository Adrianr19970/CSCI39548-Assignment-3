let num_Rows = 1;
let num_Cols = 1;
let colorSelected = "#ffffff";

// Creates a Cell (Helper Function)
function initial_Color(new_Cell) {
    new_Cell.classList.add("no_Color");
    new_Cell.style.backgroundColor = "#ffffff";
    return new_Cell;
}



// Adds a row
function addR() {
    let grid = document.getElementById("table");
    let row = document.createElement("tr");

    for (let x = 0; x < num_Cols; x++)
    {
        let new_Cell = document.createElement("td");
        initial_Color(new_Cell);
		new_Cell.setAttribute('onclick', 'fillCell(this)');
        row.appendChild(new_Cell);
    }

    grid.appendChild(row);
    num_Rows++;
}

// Adds a column
function addC() {
    let rows = document.querySelectorAll("tr");

    let row_Counter = 0;

    for (let x = 0; x < num_Rows; x++) {
        let new_Cell = document.createElement("td");
        initial_Color(new_Cell);
		new_Cell.setAttribute('onclick', 'fillCell(this)');
        rows[row_Counter].appendChild(new_Cell);
        row_Counter++;
    }
    num_Cols++;
}   

// Removes a Row
function removeR() {
    if (num_Rows <= 1) {
        alert("Cannot delete anymore Rows")
    }

    else {
        let grid = document.getElementById("table");
        grid.deleteRow(num_Rows - 1);
   
        num_Rows--;
    }
}

// Removes a Column
function removeC() {
    if (num_Cols <= 1) {
        alert("Cannot Remove anymore Columns")
    }

    else {
        let rows = document.querySelectorAll("tr");
        let row_Counter = 0;
    
        for (let x = 0; x < num_Rows; x++) {
            rows[row_Counter].removeChild(rows[row_Counter].lastChild);
            row_Counter++;
        }
    
        num_Cols--;
    }

}

// Sets global variable for selected color
function selectedColor(color) {
    colorSelected = color;
    console.log(color);

    let interface_bg = document.getElementById("interface");
    interface_bg.style.backgroundColor = colorSelected;
}

// Fills all uncolored squares with a specified color
function fillU() {
	let cells = document.querySelectorAll(".no_Color");
	for(let i = 0; i<cells.length; i++){
		cells[i].style.backgroundColor=colorSelected;
		if(cells[i].style.backgroundColor!=="rgb(255, 255, 255)")
			cells[i].classList.remove("no_Color");
		else
			cells[i].classList.add("no_Color");
	}
}

// Sets all squares to the specified color
function fill() {
    alert("Clicked Fill")
}

// Clears all squares
function clearAll() {
    alert("Clicked Clear All")
}

// Sets clicked square to selected color 
function fillCell(cell){
	cell.style.backgroundColor= colorSelected;
	if(cell.style.backgroundColor!=="rgb(255, 255, 255)"){
		cell.classList.remove("no_Color");
	}
	else{
		cell.classList.add("no_Color");
	}
}