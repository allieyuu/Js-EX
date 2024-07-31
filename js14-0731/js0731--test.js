// 建立一個存放選取結果的變數
let result ="";
// 取得送出按鈕
let myBtn = document.querySelector('#btn');
// 監聽按鈕是否左鍵一下

myBtn.addEventListener('click',() => {
    // 取得下拉式方塊
    let myDrink = document.querySelector('#city');
    // 使用迴圈，逐一檢查是否被選取 => selected
    for(let i=0;i<myDrink.length;i++){
        if (myDrink[i].selected){
            arrResult.push(myDrink[i].value)
        }    
    }
    console.log('被勾選的選項:'+ arrResult);
    console.log('沒被勾選的選項:'+ arrResultNot);

    //取得顯示資料的位置
    let getDiv = document.getElementById('showData');
    //含html1標籤，使用innerHTML
    getDiv.innerHTML = '<h1>test<h1>';
    getDiv.innerHTML = getDiv.innerHTML + 'test2';


    

});