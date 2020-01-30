document.getElementById("red").addEventListener("click", function () {
    changeColor(this.value);
});

document.getElementById("black").addEventListener("click", function () {
    changeColor(this.value);
});

document.getElementById("white").addEventListener("click", function () {
    changeColor(this.value);
});

function changeColor(color) {
    document.body.style.backgroundColor = color;
    console.log(color);
}