const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal__close")
const modalOpenBtn = document.querySelector(".btn_white")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal)

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContect = document.querySelectorAll(".tabcontent");

const handleHideTabsContect = () => {
    tabsContect.forEach((item) => {
        item.style.display = "none"
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const handleShowTabsContent = (i = 0) => {
    tabsContect[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

tabsParent.addEventListener("click", (e) => {
    const target = e.target
    // console.log(target);

    if(target.classList.contains("tabheader__item")) {
        console.log(target);
        tabs.forEach((item, i) => {
            if(item === target) {
                // console.log(i);
                handleHideTabsContect()
                handleShowTabsContent(i)
            }
        })
    }
})

handleHideTabsContect()
handleShowTabsContent()


const right = document.querySelector(".offer__slider-next");
const left = document.querySelector(".offer__slider-prev");
const current = document.querySelector("#current");
const images = document.querySelectorAll(".offer__slide");

let currentIndex = 0;

const handleHideOfferContent = () => {
    images.forEach((item) => {
        item.style.display = "none";
        item.classList.remove("offer__slide--zoom");
    });
};

const handleShowOfferContent = (i = 0) => {
    images[i].style.display = "block";
    images[i].classList.add("offer__slide--zoom");
};

const updateCurrentIndex = () => {
    current.textContent = String(currentIndex + 1).padStart(2, '0');
};

const handleNextButtonClick = () => {
    handleHideOfferContent();
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    handleShowOfferContent(currentIndex);
    updateCurrentIndex();
};

const handlePrevButtonClick = () => {
    handleHideOfferContent();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    handleShowOfferContent(currentIndex);
    updateCurrentIndex();
};

const timeOutInterval = () => {
    clearInterval(intervalId);
    intervalId = setTimeout(() => {
        intervalId = setInterval(handleNextButtonClick, 3000);
    }, 7000);
}

right.addEventListener("click", () => {
    handleNextButtonClick();
    timeOutInterval()
});

left.addEventListener("click", () => {
    handlePrevButtonClick();
    timeOutInterval()
});

handleHideOfferContent();
handleShowOfferContent();
updateCurrentIndex();

let intervalId = setInterval(handleNextButtonClick, 1000);

window.addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const openScroll = window.scrollY;
    if (openScroll === height) {
        openModal();
    }
});