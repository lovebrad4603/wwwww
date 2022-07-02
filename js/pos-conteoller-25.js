let flag_25 = true, //狀態false为正常的狀態,ture为放大的狀態
    img_25 = document.getElementById(`img-25`) //圖片元素，改後面的數字
let pos_25 = document.getElementById(`pos-1`); //抓pos 不用改
let pos_img_25 = document.getElementById(`pos-img`);
let math_25 = document.getElementById(`img-25`).name.substring(0, 2);

function www() {
    pos_25.style.opacity = `0`;
    pos_25.style.zIndex = `-999999999999`;
}
img_25.onclick = function() {
    flag_25 = false;
    //图片点击事件  
    if (flag_25) {
        pos_25.style.zIndex = `-999999999999`; //图片为消失狀態
        flag_25 = false; //把狀態设为放大狀態
        //img.height = imgH * 2;
        //img.width = imgW * 2;
        pos_25.style.opacity = `0`; //消失 打X的消失在打X的物件上

    } else {
        //图片为放大狀態
        flag_25 = true; //把狀態设为正常狀態
        //img.height = imgH / 2;
        //img.width = imgW / 2;
        pos_25.style.opacity = `1`; //出現
        pos_25.style.margin = `0,auto`; //置中
        pos_img_25.src = `img/infor-img/${math_25}.jpg`; //圖片
        pos_25.style.zIndex = `999999999999`;
    }
    flag_25 = false; //每次點完，都還原到false狀態
}