
function main() {
    createDiv();

    let boxes = document.getElementsByClassName("box");

    for (let i=0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseover", e => {
            boxes[i].style.backgroundColor = "blue"
        }, false)
    }
}

function createDiv(){
    const current = document.querySelector(".grid-container");
    const myStyle = getComputedStyle(current);
    const height = myStyle.height;

    let gridRow = 16;
    let gridCol = 16;

    for (let i = 0; i < gridCol; i++) {
        const container = document.createElement('div');
        container.style.display = "flex";
        current.appendChild(container);

        for (let i = 0; i < gridRow; i++){
            const newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "white";
            newDiv.style.width = "100%";
            newDiv.style.height = "32px";
            newDiv.classList.add("box");
            
            container.appendChild(newDiv);
        }
    }
    
}

main();