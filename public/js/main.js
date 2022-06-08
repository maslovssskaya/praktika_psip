const burgerButton = document.querySelector(".burger-button")
const closeMenuButton = document.querySelector(".close-menu-button")
const burgerMenu = document.querySelector(".burger-menu")
const reviewForm = document.querySelector(".review-form")

function initializeAdvertisment(delay) {
    setTimeout("document.getElementById('overlay').style.display='block'", delay);
}

$(document).ready(function(){
    $('.materialboxed').materialbox({
        fullWidth: 1000
    });
});

$(document).ready(function(){
    $('.carousel').carousel();
});

initializeAdvertisment(5000);

burgerButton.addEventListener("click", e => {
    burgerMenu.classList.add("active")
    burgerButton.classList.add("none")
})

closeMenuButton.addEventListener("click", e => {
    burgerMenu.classList.remove("active")
    burgerButton.classList.remove("none")
})

reviewForm.addEventListener("submit", e => {
    const emailInput = reviewForm.querySelector("#email")
    if (!emailInput.textContent.includes("@") || !emailInput.textContent.includes(".")) {
        e.preventDefault()
        alert("Недопустимое значение почты! Должна включать @ и .")
    }

    const reviewTextArea = reviewForm.querySelector("#reviewText")
    if (reviewTextArea.textContent.length === 0) {
        e.preventDefault()
        alert("Заполните поле с отзывом!")
    }
})
