let now_1 = new Date();
let season_1 = ['spring',
    'summer',
    'fall',
    'winter',
];
let now_season_1 = Math.floor(now.getMonth() / 3);
let img_1 = {
    spring: 'no',
    summer: 'img/bg-img/夏/01.png',
    fall: 'img/bg-img/秋/01.png',
    winter: 'img/bg-img/冬/01.png',
}
let target_1 = document.getElementById('bg-obj-01');
target_1.src = `${img_1[season_1[now_season_1]]}`;