function areaOfFigures(input) {
    let figures = input[0];

    if (figures  === "square") {
        let face = input[1] * input[1];
        console.log(`Square is  ${(face.toFixed(3))} `);
    } else if (figures  === "rectangle") {
        let face = input[1] * input[2];
        console.log(`rectangle is  ${(face.toFixed(3))} `);    
    } else if (figures  === "circle") {
        let face = Math.PI * (input[1]*input[1]) ;
        console.log(`circle is  ${(face.toFixed(3))} `);    
    } else if (figures  === "triangle") {
        let face = (input[1] * input[2]) / 2; ;
        console.log(`triangle is  ${(face.toFixed(3))} `);    
    }
}
areaOfFigures(["triangle", "4.5","20"])