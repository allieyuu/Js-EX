// 取得送出按鈕(擇其一)
let myBtn = document.querySelector('#btn');

//監聽按鈕是否被左鍵一下了
myBtn.addEventListener('click',function(){
    let result ="";
    // 取得科目的全部
    let subjects=document.getElementsByName('subject');
    //使用迴圈逐一檢查是否被選取 => checked
    for(let i;i<subjects.length;i++){
        if(subjects[i.checked]){
            result=subjects[i].value;
            break;
        }
    }
    console.log('科目' + result);

});
