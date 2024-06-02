
function main() {
    let slider = document.getElementById("boxSize");
    let output = document.getElementById("demo");
    let size = slider.value;
    output.innerHTML = size;

    createDiv(size);
    drawBoxes();
    clearBoxes();

    // On slider change, change grid size.
    slider.oninput = () => {
        output.innerHTML = slider.value;
        resetGrid();
        createDiv(slider.value);
        drawBoxes();
    }
}

// Create div elements for grid
function createDiv(gridRow){
    const current = document.querySelector(".grid-container");

    let size = 800.0 / gridRow;

    for (let i = 0; i < gridRow; i++) {
        const container = document.createElement('div');
        container.style.display = "flex";
        container.style.height = size + "px";
        container.classList.add("boxContainer");
        current.appendChild(container);

        for (let i = 0; i < gridRow; i++){
            const newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "white";
            newDiv.style.width = size + "px";
            newDiv.style.height = "auto";
            newDiv.classList.add("box");
            
            container.appendChild(newDiv);
        }
    }
    
}

// reset grid to all white
function clearBoxes(){
    let boxes = document.getElementsByClassName("box");
    let btn = document.getElementById("clear");

    // Reset Grid
    btn.onclick = () => {
        for (let i=0; i < boxes.length; i++){
            boxes[i].style.backgroundColor = "white";
        }
    }
}

// Draw boxes on grid
function drawBoxes(){
    let boxes = document.getElementsByClassName("box");
    let eraseBtn = document.getElementById("eraser");
    let color = document.getElementById("pickColor");
    let eraser = false;

    // Handle erase Toggle
    eraseBtn.onclick = () => {
        if (eraser == false){
            eraser = true;
        } else {
            eraser = false;
        }
    }

    // Draw boxes depending on erase toggle
    for (let i=0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseover", e => {
            if (eraser){
                boxes[i].style.backgroundColor = "white";
            } else {
                boxes[i].style.backgroundColor = color.value;
            }
        }, false)
    }
}

// Delete all div in Grid
function resetGrid(){
    let grid = document.getElementById("grid-container");

    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
}

main();