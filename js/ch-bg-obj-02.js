let now_2 = new Date();
let season_2 = ['spring',
    'summer',
    'fall',
    'winter',
];
let now_season_2 = Math.floor(now.getMonth() / 3);
let img_2 = {
    spring: 'no',
    summer: 'img/bg-img/夏/02.png',
    fall: 'img/bg-img/秋/02.png',
    winter: 'img/bg-img/冬/02.png',
}
let target_2 = document.getElementById('bg-obj-02');
target_2.src = `${img_2[season_2[now_season_2]]}`;