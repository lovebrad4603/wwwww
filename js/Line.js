//LINE相關
function Line() {
    document.getElementById("Line").style.zIndex = `300000000000000000000000000000000000`;
    document.getElementById("Line").style.opacity = `1`;
}

function Line_out() {
    document.getElementById("Line").style.zIndex = `-900000000000000000000000000000000000`;
    document.getElementById("Line").style.opacity = `0`;
    document.getElementById("Line").style.transition = `.5s`;
}