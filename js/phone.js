// phone相關
function phone() {
    document.getElementById("phone").style.zIndex = `300000000000000000000000000000000000`;
    document.getElementById("phone").style.opacity = `1`;
}

function phone_out() {
    document.getElementById("phone").style.zIndex = `-900000000000000000000000000000000000`;
    document.getElementById("phone").style.opacity = `0`;
    document.getElementById("phone").style.transition = `.5s`;
}