document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById("background");
    const text = document.getElementById("text");
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    noButton.addEventListener('click', (event) => {
        noButton.remove();
        text.textContent = "Подумай ще раз!";
        image.src = "Images/No.jpg";
    });

    yesButton.addEventListener('click', (event) => {
        yesButton.remove();
        noButton.remove();
        text.textContent = "Я знаю ;)";
        image.src = "Images/Yes.jpg";
    });
})