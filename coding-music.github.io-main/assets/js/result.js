
const songContainer = document.getElementById("songs");
const artists = sessionStorage.getItem('resultados');
const artist = JSON.parse(artists);

for (let i = 0; i < artist.results.length; i++) {
    console.log('hola');
    const article = document.createElement("article"),
        name_artists = document.createElement("p"),
        song = document.createElement("h4"),
        img = document.createElement("img"),
        audio = document.createElement("audio"),
        audioSource = document.createElement("source");

    name_artists.innerHTML = artist['results'][i].artistName;
    song.innerHTML = artist['results'][i].trackName;
    img.src = artist['results'][i].artworkUrl100;
    audioSource.src = artist['results'][i].previewUrl;
    audio.controls = true;

    article.appendChild(img);
    article.appendChild(artists);
    article.appendChild(song);
    article.appendChild(audio);
    audio.appendChild(audioSource);

    songContainer.appendChild(article);
}


document.addEventListener(
    "play",
    (event) => {
        const audio = document.getElementsByTagName("audio");
        for (let i = 0; i < audio.length; i++) {
            if (audio[i] != event.target) {
                audio[i].pause();
            }
        }
    },
    true
);