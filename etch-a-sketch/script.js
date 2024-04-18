
function createDiv(){
    const newDiv = document.createElement('div');
    const current = document.querySelector(".grid-container");
    const myStyle = getComputedStyle(current);
    const height = myStyle.height;

    const heighINT = Number(height);

    newDiv.style.backgroundColor = "red";
    newDiv.style.height = '10px';
    newDiv.style.width = '10px';

    console.log(height + heighINT);
    current.appendChild(newDiv);
}

createDiv();