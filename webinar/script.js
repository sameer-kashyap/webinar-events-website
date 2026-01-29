const corousel=document.querySelector(".speaker_slides");
const arrowBtns=document.querySelectorAll(".arrow");
const firstCardWidth =corousel.querySelector(".slides").offsetWidth;
const corouselChildrens=[...corousel.children];

let isDragging=false,startX, startScrollLeft;


arrowBtns.forEach(btn => {
                btn.addEventListener("click" , () => {
                    corousel.scrollLeft += btn.id === "left" ? -firstCardWidth :firstCardWidth;
                })
});

let cardPerView = Math.round(corousel.offsetWidth / firstCardWidth);


// corouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     corousel.insertAdjacentHTML("afterbegin",card.outerHtml);
// })

// corouselChildrens.slice(0, cardPerView).forEach(card => {
//     corousel.insertAdjacentHTML("beforeend",card.outerHtml);
// })

const dragStart = (e) => {
    isDragging = true;
    corousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = corousel.scrollLeft;
}
const dragStop = () => {
    isDragging = false;
    corousel.classList.remove("dragging");
}


const dragging= (e) => {
    if(!isDragging) return;
    corousel.scrollLeft=startScrollLeft - (e.pageX - startX);
}

corousel.addEventListener("mousemove" , dragging);
corousel.addEventListener("mousedown" , dragStart);
document.addEventListener("mouseup", dragStop);






//venue_slides

const slides = document.querySelectorAll(".venue_slides");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter !== 0) {
        counter--;
        slideImage();
    }
};

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    }
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
