const boxes = document.querySelectorAll('.box');
function toggleOpen() {
    // console.log(this);   // this selects that particular div.
    this.classList.toggle('open');
}
function toggleActive(e) {
    // console.log(e.propertyName);
    if (e.propertyName == 'flex-grow') {
        this.classList.toggle('open-active');
    }
}
boxes.forEach(box => box.addEventListener('click', toggleOpen));
boxes.forEach(box => box.addEventListener('transitionend', toggleActive));
