let activeElement = 0;
const timeChange = 4000;

// Pobranie 4 elementów, na których pracujemy
const imgColorHtml = document.querySelector(".color");
const imgGrayHtml = document.querySelector(".gray");
const h1Html = document.querySelector(".member h1");
const h2Html = document.querySelector(".member h2");

// Informacje w tablicach o elementach do podmiany
const colorImages = ["img/s1.png", "img/s2.png", "img/s3.png"];
const grayImages = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const names = ["Anna Baugart", "Marek Feliksiak", "Arek Pawlowicz"];
const professions = ["Programistka", "UX i UI Designer", "Front-end"];

function changeElement() {
    activeElement++;

    if(activeElement == colorImages.length) {
        activeElement = 0;
    }

    imgColorHtml.src = colorImages[activeElement];
    imgGrayHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];
}

setInterval(changeElement, timeChange);



