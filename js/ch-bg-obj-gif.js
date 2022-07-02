let now_gif = new Date();
let season_gif = ['spring',
    'summer',
    'fall',
    'winter',
];
let now_season_gif = Math.floor(now.getMonth() / 3);
let img_gif = {
    spring: 'img/bg-img/春/春.gif',
    summer: 'img/bg-img/夏/夏.gif',
    fall: 'img/bg-img/秋/秋.gif',
    winter: 'img/bg-img/冬/冬.gif',
}
let DOM_W = document.documentElement.scrollWidth;
if (DOM_W < 1000) {
    img_gif.spring = `img/bg-img/春/春-中.gif`;
    img_gif.fall = `img/bg-img/秋/秋-中.gif`;
    img_gif.winter = `img/bg-img/冬/冬-中.gif`;
}
if (DOM_W < 600) {
    img_gif.spring = `img/bg-img/春/春-小.gif`;
    img_gif.fall = `img/bg-img/秋/秋-小.gif`;
    img_gif.winter = `img/bg-img/冬/冬-小.gif`;
}


let target_gif = document.getElementById('bg-obj-gif');
target_gif.src = `${img_gif[season_gif[now_season_gif]]}`;

console.log(DOM_W);