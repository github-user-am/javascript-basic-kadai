// 0～100までのランダムの整数をnumに代入
let num = Math.floor(Math.random() * 101);

// numをコンソールに出力
console.log(num);

// numが3と5の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}
// numが3の倍数の場合
else if (num % 3 === 0) {
    console.log('3の倍数です');
}
// numが5の倍数の場合
else if (num % 5 === 0) {
    console.log('5の倍数です');
}
// それ以外
else {
    console.log(num);
}