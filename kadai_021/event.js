// id='btn'のHTML要素を取得して定数に代入
const btn = document.getElementById('btn');

// ボタンがクリックされたら2秒後にid='text'のHTML要素のテキストを書き換える
btn.addEventListener('click', () => {
    // id='text'のHTML要素を取得して定数に代入
    const text = document.getElementById('text');
    
    // 2秒後に書き換え処理を実行
    setTimeout(() => {
        text.textContent = "ボタンをクリックしました";
    }, 2000);
});