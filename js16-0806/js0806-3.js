
     // 更改第一個段落
    function changeP1() {
    // 變更段落內容
    document.querySelector('p').innerHTML = 'Hello';
    // 只取得第一個段落
    console.log(document.querySelector('p'));
    // 取得所有段落
    console.log(document.querySelectorAll('p'));
    // 產生集合陣列物件
    document.getElementsByTagName('p')[0].innerHTML = 'Hello';
    }

    // 更改第二個段落
function changeP2() {
    // 取得第二個段落改變段落內容
    document.getElementsByTagName('p')[1].innerHTML = '第二個段落我更改了';
    // 取得id改變段落內容
    document.getElementById('p2').innerHTML = '取得id改變段落內容';
    // 取得class=>p1 改變段落內容
    document.querySelector('.p2').innerHTML = '取得class=>p1 改變段落內容';
}