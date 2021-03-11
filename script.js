let num_Rows = 1;
let num_Cols = 1;
let colorSelected = "#ffffff";
let rainbowList=["#fc0303", "#fc4e03", "#fcba03", "#fcf003", "#41fc03", "#03fc77", 
"#03fcd3", "#039dfc", "#034afc","#4a03fc","#ba03fc","#fc03e3", "#eb3434"];
let checkbox=document.getElementById("checkBox");
let globalGrid=[];
checkbox.checked=false;

// Creates a Cell (Helper Function)
function initial_Color(new_Cell) {
    new_Cell.classList.add("no_Color");
    new_Cell.style.backgroundColor = "#ffffff";
    return new_Cell;
}

initial_Color(firstCell);


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
	
	if(checkbox.checked)
			rainbowify(0,num_Rows-2);
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
		
		if(checkbox.checked)
			rainbowify(num_Cols);
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

//Passing user input to rainbowList
function selectedPalette(palette){
	rainbowList=palette.split(",");
	console.log(rainbowList[0]);
	checkbox.checked=true;
	rainbowify();
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
	checkbox.checked=false;
}

// Sets all squares to the specified color
function fill() //This function traverses all the rows and columns and change each cell to the color user wants
{
	alert("Clicked Fill")

	checkbox.checked=false; //leave at end of function (for rainbow edge cases)
}

/* I'm defining the "no_Color" class to be all boxes which are colored white 
-Dylan																	*/


// Clears all squares - Anyeli 
function clearAll() 
{
	//alert("Clicked Clear All")
	let rows= document.querySelectorAll("tr"); //getting all the rows
	for(i=0; i<rows.length; i++) //go through the rows
	{
		for (j=0; j< rows[i].children.length; j++) //go through the columns
		{
			//Each individual cell -> rows[i].children[j]
			rows[i].children[j].style.backgroundColor="ffffff"; //setting each cell to white
			rows[i].children[j].classList.add("no_Color"); //adding to the no_Color class (all the white boxes are in it)
		}
	}
	checkbox.checked=false; //leave at end of function (for rainbow edge cases)
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
	checkBox.checked=false;
}

/* rainbow code */

//Changes everything to rainbow if box is checked, reverts everything to original if box is unchecked
function rainbowify(colp=0, rowp=0){	
	var rows= document.querySelectorAll("tr");
	if(checkBox.checked){
		for (row=rowp; row<rows.length; row++) {
			for (col=colp; col< rows[row].children.length; col++) {
				rows[row].children[col].style.backgroundColor = rainbowList[(Math.max(row,col))%rainbowList.length];
				rows[row].children[col].classList.remove("no_Color");
			}
		}
	}
	else{
		for(i=0; i<rows.length; i++) {
			for (j=0; j< rows[i].children.length; j++) {
				if(i<globalGrid.length && j<globalGrid[i].length)
					rows[i].children[j].style.backgroundColor=globalGrid[i][j];
				else
					rows[i].children[j].style.backgroundColor="rgb(255,255,255)";
				if(rows[i].children[j].style.backgroundColor=="rgb(255, 255, 255)")
					rows[i].children[j].classList.add("no_Color");
			}
		}
	}
}

//keeps a copy of color values of grid before grid is made rainbow
function rememberOldGrid(){
	if(checkBox.checked){
		globalGrid=[];
		rows=document.querySelectorAll("tr");
		for(i=0; i< rows.length; i++){
			globalGrid.push([]);
			for(j=0; j<rows[i].children.length; j++){
				globalGrid[i].push(rows[i].children[j].style.backgroundColor);
			}
		}
	}
	rainbowify();
}

function rgb() {
	let interface_bg = document.getElementById("interface");

	if(checkBox.checked == true) {
		interface_bg.style.color = "#ffff00";
		interface_bg.style.animation = "rgb 10s linear 0s infinite";
	}
	else {
		interface_bg.style.color = "#000"
		interface_bg.style.animation = "none";
	}
}



//Need to do - clear all
//Fill ALL W CURRENTLY SELECTED COLOR
//
