var allColors = []

// this function will be called when button clicked
function changeColor() {
    for (var i = 0; i < 3; i++) {
        color = Math.floor(Math.random() * 255);
        allColors.push(color);
    }
    for (var i = 0; i < 3; i++) {
        value = 'rgb(' + allColors.join(',') + ')';
        console.log(value);
    }
    document.getElementById("bodyID").style.backgroundColor = value;
    allColors = [];
}