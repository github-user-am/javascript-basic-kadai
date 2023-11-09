// id='btn'のボタンを定数に代入
const btn = document.getElementById('btn');

// ボタンをクリックしたときにh2要素のテキストを書き換える
btn.addEventListener('click', () => {
    // id='text'のh2要素を定数に代入
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
})