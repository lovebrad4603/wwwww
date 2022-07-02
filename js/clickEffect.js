//點擊煙花效果
let card = document.querySelector('.card');
card.addEventListener('click', function(e) {

    let x = e.clientX - this.offsetLeft;
    let y = e.clientY - this.offsetTop;

    let circle = document.createElement('aside');
    circle.style.left = x - 60 + 'px';
    circle.style.top = y - 50 + 'px';

    card.appendChild(circle);

    setInterval(function() {
        circle.remove();
    }, 400)

})