const fog1 =
    document.querySelector('#fog1');

fog1.addEventListener('animationend',function(){
    fog1.classList = "";
})

function moveright() {
    fog1.classList.add('moveright');
}
