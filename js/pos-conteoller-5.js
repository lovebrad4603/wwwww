let flag_5 = true, //狀態false为正常的狀態,ture为放大的狀態
    img_5 = document.getElementById(`img-05`) //圖片元素，改後面的數字
let pos_5 = document.getElementById(`pos-1`); //抓pos 不用改
let pos_img_5 = document.getElementById(`pos-img`);
let math_5 = document.getElementById(`img-05`).name.substring(0, 2);

function www() {
    pos_5.style.opacity = `0`;
    pos_5.style.zIndex = `-999999999999`;
}
img_5.onclick = function() {
    flag_5 = false;
    //图片点击事件  
    if (flag_5) {
        pos_5.style.zIndex = `-999999999999`; //图片为消失狀態
        flag_5 = false; //把狀態设为放大狀態
        //img.height = imgH * 2;
        //img.width = imgW * 2;
        pos_5.style.opacity = `0`; //消失 打X的消失在打X的物件上

    } else {
        //图片为放大狀態
        flag_5 = true; //把狀態设为正常狀態
        //img.height = imgH / 2;
        //img.width = imgW / 2;
        pos_5.style.opacity = `1`; //出現
        pos_5.style.margin = `0,auto`; //置中
        pos_img_5.src = `img/infor-img/${math_5}.jpg`; //圖片
        pos_5.style.zIndex = `999999999999`;
    }
    flag_5 = false; //每次點完，都還原到false狀態
}