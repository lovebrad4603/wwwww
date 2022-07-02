let DOM_Width = document.documentElement.scrollWidth;
if (DOM_Width < 768) {
    document.querySelector(`.big-bg-por`).style.scrollbehavior = `none`;
}
console.log(DOM_Width);