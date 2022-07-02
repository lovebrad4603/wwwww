//==========滑鼠尾巴JS測試============
//========抓當前滑鼠的座標=========
function getMousePosition(event) {
    var x = 0; //x座標
    var y = 0; //y座標
    //documentElement 返回一個文件的文件元素
    doc = document.documentElement;
    //body 返回文件的body元素
    body = document.body;
    //解決相容性 不確定
    if (!event) event = window.event;
    //解決滑鼠滾輪滾動後與相對座標的差值
    //pageYoffset是Netscape特有
    if (window.pageYoffset) {
        x = window.pageXOffset;
        y = window.pageYOffset;
    } else { //其他瀏覽器滑鼠滾動
        x = (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        y = (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }
    //得到的x加上當事件被觸發時滑鼠指標向對於瀏覽器頁面（或客戶區）的水平座標
    x += event.clientX;
    //得到的x加上當事件被觸發時滑鼠指標向對於瀏覽器頁面（或客戶區）的垂直座標
    y += event.clientY;
    //返回x和y
    return { 'x': x, 'y': y };
}
//========函式:獲取當前滑鼠的座標=========
//=====生成從minNum到maxNum的隨機數=====
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}
//=====生成從minNum到maxNum的隨機數======
//======給整個文件繫結一個滑鼠移動事件======
document.onmousemove = function(event) {
    // 在頁面建立一個標籤，（這裡是建立一個自定義標籤styleImg ）
    var styleImg = document.createElement("div");
    //獲取隨機數1-5,根據隨機數來設定標籤的樣式
    var r = randomNum(1, 5);
    switch (r) {
        case 1:
            //設定圖片的路徑,根據不同的路徑就可以更改成不同的樣式
            styleImg.innerHTML = "<img src='img/color.png' style='width: 20px;height: auto ; '/>"
            break;
        case 2:
            styleImg.innerHTML = "<img src='img/color.png' style='width: 20px;height: auto; '/>"
            break;
        case 3:
            styleImg.innerHTML = "<img src='img/color.png' style='width: 20px;height: auto; '/>"
            break;
        case 4:
            styleImg.innerHTML = "<img src='img/color.png' style='width: 20px;height: auto; '/>"
            break;
        case 5:
            styleImg.innerHTML = "<img src='img/color.png' style='width: 20px;height: auto; '/>"
            break;
    }
    //設定left 和top，設定定位
    styleImg.style.position = 'absolute'
        // 設定標籤的初始位置，即滑鼠的當前位置
    var x = getMousePosition(event).x;
    var y = getMousePosition(event).y;
    // 設定styleImg的座標
    styleImg.style.top = y + "px";
    styleImg.style.left = x + "px";
    //繫結testDiv為當前滑鼠小尾巴生效的區域
    var testDiv = document.getElementById("main");
    // 將新建的標籤加到頁面的 body標籤中
    testDiv.appendChild(styleImg);
    // 在文件中有超出的地方就會不顯示
    // 設定溢位隱藏，為了防止滑鼠在移動的過程中會觸發上下滾動條
    testDiv.style.overflow = 'hidden';
    //
    var count = 0;
    //setInterval() 方法按照指定的週期來呼叫函式
    var time = setInterval(function() {
            // 設定定時器 ，讓每一次生成的標籤在指定的週期內修改相應的透明度
            count += 5;
            styleImg.style.opacity = (100 - count) / 100;
        }, 30)
        // setTimeout() 方法用於在指定的毫秒數後呼叫函式或計算表示式。
        // 設定延時定時器， 在一定的時間後清除上面的定時器，讓建立的標籤不再進行變化
    setTimeout(function() {
        // 使用 clearInterval() 來停止執行setInterval函式
        clearInterval(time);
        // 刪除建立的標籤
        testDiv.removeChild(styleImg);
    }, 250)
}