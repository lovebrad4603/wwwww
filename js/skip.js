// .www 的 跳過動畫
function skip() {
    document.getElementById(`opacity-bg`).style.animationName = `www`;
    document.getElementById(`opacity-skip`).style.animationName = `opacity-skip`;
    document.getElementById(`opacity-skip`).style.animationDuration = `0.8s`;
    document.getElementById(`a-link`).style.animationName = `a-link`;
    document.getElementById(`a-link`).style.animationDuration = `0.8s`;
}