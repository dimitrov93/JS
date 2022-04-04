<<<<<<< HEAD
function chessBoard(size) {
    let html = `<div class="chessboard">\n`;
    for (let row = 0; row < size; row++) {
        html += `  <div>\n`;
        let color = (row % 2 == 0) ? "black" : "white";
        for (let col = 0; col < size; col++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color == "white") ? "black" : "white";
        }
        html += `  </div>\n`;
    }
    return html + `</div>`;
}

=======
function chessBoard(size) {
    let html = `<div class="chessboard">\n`;
    for (let row = 0; row < size; row++) {
        html += `  <div>\n`;
        let color = (row % 2 == 0) ? "black" : "white";
        for (let col = 0; col < size; col++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color == "white") ? "black" : "white";
        }
        html += `  </div>\n`;
    }
    return html + `</div>`;
}

>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
chessBoard(3)