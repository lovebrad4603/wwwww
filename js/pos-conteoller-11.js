let flag_11 = true, //狀態false为正常的狀態,ture为放大的狀態
    img_11 = document.getElementById(`img-11`) //圖片元素，改後面的數字
let pos_11 = document.getElementById(`pos-1`); //抓pos 不用改
let pos_img_11 = document.getElementById(`pos-img`);
let math_11 = document.getElementById(`img-11`).name.substring(0, 2);

function www() {
    pos_11.style.opacity = `0`;
    pos_11.style.zIndex = `-999999999999`;
}
img_11.onclick = function() {
    flag_11 = false;
    //图片点击事件  
    if (flag_11) {
        pos_11.style.zIndex = `-999999999999`; //图片为消失狀態
        flag_11 = false; //把狀態设为放大狀態
        //img.height = imgH * 2;
        //img.width = imgW * 2;
        pos_11.style.opacity = `0`; //消失 打X的消失在打X的物件上

    } else {
        //图片为放大狀態
        flag_11 = true; //把狀態设为正常狀態
        //img.height = imgH / 2;
        //img.width = imgW / 2;
        pos_11.style.opacity = `1`; //出現
        pos_11.style.margin = `0,auto`; //置中
        pos_img_11.src = `img/infor-img/${math_11}.jpg`; //圖片
        pos_11.style.zIndex = `999999999999`;
    }
    flag_11 = false; //每次點完，都還原到false狀態
}