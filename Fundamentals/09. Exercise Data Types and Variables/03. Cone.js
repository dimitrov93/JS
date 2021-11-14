function cone(r,h) {
    let V = (Math.PI * (r*r) * h) / 3;
    let L = Math.sqrt(h * h + r * r)
    let T = (Math.PI*r) *(r + L)
    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${T.toFixed(4)}`);
}

cone(3,5)
cone(3.3,7.8)