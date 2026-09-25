const seriesData = {

    "vampire-diaries": {

        title: "The Vampire Diaries",

        year: "2009",

        genre: "Drama / Fantasy",

        seasons: "8 Seasons",

        rating: "8.5",

        language: "English",

        poster: "jpg/The Vampire Diaries.webp",

        description:
            "The story follows Elena Gilbert and the Salvatore brothers in the mysterious town of Mystic Falls.",

        about:
            "The Vampire Diaries is a supernatural drama series filled with mystery, friendship, love and suspense."

    },


    "pretty-little-liars": {

        title: "Pretty Little Liars",

        year: "2010",

        genre: "Drama / Mystery",

        seasons: "7 Seasons",

        rating: "7.3",

        language: "English",

        poster: "jpg/Pretty Little Liars.webp",

        description:
            "Four friends receive mysterious messages from someone who knows all of their secrets.",

        about:
            "Pretty Little Liars is a mystery drama series about friendship, secrets and unexpected events."

    },


    "i will find you": {

    title: "I Will Find You",

    year: "2024",

    genre: "Drama / Mystery / Thriller",

    seasons: "1 Season",

    rating: "7.5",

    language: "English",

    poster: "jpg/I Will Find You.webp",

    description:
        "A determined man searches for the truth after discovering that his missing daughter may still be alive.",

    about:
        "I Will Find You is a suspenseful drama filled with mystery, emotions and unexpected twists."

    },


    "wednesday": {

        title: "Wednesday",

        year: "2022",

        genre: "Comedy / Horror / Mystery",

        seasons: "2 Seasons",

        rating: "8.0",

        language: "English",

        poster: "jpg/Wednesday.webp",

        description:
            "Wednesday Addams investigates mysterious events at Nevermore Academy.",

        about:
            "Wednesday is a dark comedy mystery series centered around Wednesday Addams."

    },


    "friends": {

        title: "Friends",

        year: "1994",

        genre: "Comedy",

        seasons: "10 Seasons",

        rating: "8.9",

        language: "English",

        poster: "jpg/Friends.webp",

        description:
            "Six friends navigate life, friendship, work and relationships in New York City.",

        about:
            "Friends is a classic comedy series following the lives of six close friends."

    },


    "The Walking Dead": {

        title: "The Walking Dead",

        year: "2010",

        genre: "Horror / Drama / Action",

        seasons: "11 Seasons",

        rating: "8.1",

        language: "English",

        poster: "jpg/The Walking Dead.webp",

        description:
            "A group of survivors tries to survive in a world changed by a mysterious outbreak.",

        about:
            "The Walking Dead is a post-apocalyptic drama series focused on survival and human relationships."

    },


    "money-heist": {

        title: "Money Heist",

        year: "2017",

        genre: "Action / Crime / Drama",

        seasons: "5 Parts",

        rating: "8.2",

        language: "Spanish",

        poster: "jpg/Money Heist.webp",

        description:
            "A mysterious professor recruits a group of criminals for an ambitious heist.",

        about:
            "Money Heist is a Spanish crime drama series known for its complex characters and suspenseful story."

    }

};



const params = new URLSearchParams(window.location.search);

const seriesId = params.get("series");



const series = seriesData[seriesId];

if (series) {


    document.getElementById("seriesPoster").src =
        series.poster;


    document.getElementById("seriesPoster").alt =
        series.title;


    document.getElementById("seriesTitle").textContent =
        series.title;


    document.getElementById("seriesYear").textContent =
        series.year;


    document.getElementById("seriesGenre").textContent =
        series.genre;


    document.getElementById("seriesSeasons").textContent =
        series.seasons;


    document.getElementById("seriesRating").textContent =
        series.rating;


    document.getElementById("seriesDescription").textContent =
        series.description;


    document.getElementById("infoGenre").textContent =
        series.genre;


    document.getElementById("infoYear").textContent =
        series.year;


    document.getElementById("infoSeasons").textContent =
        series.seasons;


    document.getElementById("infoLanguage").textContent =
        series.language;


    document.getElementById("aboutText").textContent =
        series.about;

}


else {

    document.querySelector(".details-card").innerHTML = `

        <div style="
            width: 100%;
            text-align: center;
            padding: 60px;
        ">

            <h1>Series Not Found</h1>

            <a href="series.html">
                Back to Series
            </a>

        </div>

    `;

}
