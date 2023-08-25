document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe por defecto
    const searchTerm = document.getElementById('search-input').value;
    console.log(searchTerm);
    searchMusic(searchTerm);
});

function searchMusic(query) {
    const apiUrl = `https://api.deezer.com/search?q=rock`;
    
    let result = fetch(apiUrl)
    console.log(result)
