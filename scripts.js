const items = document.querySelectorAll(".item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

prevBtn.addEventListener("click", bckButton);
nextBtn.addEventListener("click", nxtButton);

let currentSelected = 0;

function bckButton() {
    items[currentSelected].classList.remove("active");
    currentSelected--;
    items[currentSelected].classList.add("active");
    nextBtn.disabled = false;

    if(currentSelected === 0) {
        prevBtn.disabled = true;
    }
}

function nxtButton() {
    items[currentSelected].classList.remove("active");
    currentSelected++;
    items[currentSelected].classList.add("active");
    prevBtn.disabled = false;

    if(items.length === currentSelected + 1) {
        nextBtn.disabled = true;
    }

};


