const searchInput = document.getElementById("seriesSearchInput");
const searchBtn = document.getElementById("searchBtn");

const genreButtons = document.querySelectorAll(".genre");
const seriesCards = document.querySelectorAll(".series-card");

const noResults = document.getElementById("noResults");

let selectedGenre = "All";


function filterSeries() {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    let visibleCards = 0;

    seriesCards.forEach(card => {

        const title = card
            .dataset
            .title
            .toLowerCase();

        const genre = card.dataset.genre;

        const matchesSearch =
            title.includes(searchValue);

        const matchesGenre =
            selectedGenre === "All" ||
            genre === selectedGenre;

        if (matchesSearch && matchesGenre) {

            card.style.display = "block";
            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCards === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


searchInput.addEventListener(
    "input",
    filterSeries
);

searchBtn.addEventListener(
    "click",
    filterSeries
);


genreButtons.forEach(button => {

    button.addEventListener("click", () => {

        genreButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedGenre =
            button.dataset.genre;

        filterSeries();

    });

});


const submitBtn =
    document.getElementById("submitBtn");

const message =
    document.getElementById("message");

const messageResult =
    document.getElementById("messageResult");


submitBtn.addEventListener("click", () => {

    if (message.value.trim() === "") {

        messageResult.textContent =
            "Please enter your message.";

        messageResult.style.color = "#9AA6B2";

        return;
    }

    messageResult.textContent =
        "Your message has been sent successfully!";

    message.value = "";

});
