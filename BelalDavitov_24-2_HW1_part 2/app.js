const block = document.querySelector(".block");

window.addEventListener("load", function() {
    setTimeout(moveBlock, 500);
});
  

function moveBlock() {
    const currentPos = block.offsetLeft;
    const windowWidth = window.innerWidth;
    if (currentPos < windowWidth - block.offsetWidth) {
        block.style.left = currentPos + 30 + "px";
        setTimeout(moveBlock, 30);
    }
}