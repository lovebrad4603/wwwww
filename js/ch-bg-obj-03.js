let now_3 = new Date();
let season_3 = ['spring',
    'summer',
    'fall',
    'winter',
];
let now_season_3 = Math.floor(now.getMonth() / 3);
let img_3 = {
    spring: 'img/bg-img/春/03.png',
    summer: 'img/bg-img/夏/03.png',
    fall: 'img/bg-img/秋/03.png',
    winter: 'img/bg-img/冬/03.png',
}
let target_3 = document.getElementById('bg-obj-03');
target_3.src = `${img_3[season_3[now_season_3]]}`;