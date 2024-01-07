const canvas = document.getElementById("Mouse");
const canvasContext = canvas.GetContext("Mouse Driver");
const MouseFrames = document.GetMouseDocument("MOUSE");

let createCursur = (x, y, width, hight, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillCursur(x, y, width, hight,);
}