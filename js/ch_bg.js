let now = new Date();
let season = ['spring',
    'summer',
    'fall',
    'winter',
];
let now_season = Math.floor(now.getMonth() / 3);
let img = {
    spring: 'img/bg-img/春/bg-春.png',
    summer: 'img/bg-img/夏/bg-夏.png',
    fall: 'img/bg-img/秋/bg-秋.png',
    winter: 'img/bg-img/冬/bg-冬.png',
};
let target = document.querySelector('.body');
if (target) {
    target.style.background = `url(${img[season[now_season]]}) no-repeat right top `;
}