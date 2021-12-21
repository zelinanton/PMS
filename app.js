let btn = document.getElementsByClassName('btn'),
    items = document.getElementsByClassName('item'),
    active = document.getElementsByClassName('active'),
    i = 0;
// for (i; i < items.length; i++){
//     if (items[i].classList.contains('active')){
//         break;
//     }
// }
let arr = Array.from(items);
let currentItem = arr.findIndex(function(item) {
    return item.classList.contains('active');
});
console.log(currentItem);
btn[0].onclick = function() {
    if(i > 0){
        items[i].classList.remove('active');
        items[i-1].classList.add('active');
        i--;
    }
};
btn[1].onclick = function() {
    if(i < items.length - 1){
        items[i].classList.remove('active');
        items[i+1].classList.add('active');
        i++;
    }
};
