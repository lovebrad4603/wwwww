// 5(e) 沒用到
//抓LINK
let _01_Link = document.getElementById(`a`);
let _02_Link = document.getElementById(`b`);
let _03_Link = document.getElementById(`c`);
let _04_Link = document.getElementById(`d`);
let _05_Link = document.getElementById(`e`);

//抓message
let m_1 = document.getElementById(`m-1`);
let m_2 = document.getElementById(`m-2`);
let m_3 = document.getElementById(`m-3`);
let m_4 = document.getElementById(`m-4`);
let m_5 = document.getElementById(`m-5`);
//---------------------------------------------------
_01_Link.onclick = function() {
    m_1.style.marginTop = `0`;
    m_2.style.marginTop = `0`;
}
_02_Link.onclick = function() {
    m_3.style.marginTop = `0`;
    m_4.style.marginTop = `0`;
}
_03_Link.onclick = function() {
    m_3.style.marginTop = `0`;
}
_04_Link.onclick = function() {
    m_4.style.marginTop = `0`;
}
_05_Link.onclick = function() {
    m_5.style.marginTop = `0`;
}