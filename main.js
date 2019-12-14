let path = document.getElementById('animatesvg');
let curve = 30;
const changesvg = () => {
    if (curve < 40) {
        curve = curve + 0.1;
        path.setAttribute('d', `M100,30 Q70,${curve} 50,30 T0,30 v10 h100Z`);
        window.requestAnimationFrame(changesvg);
    }
}

