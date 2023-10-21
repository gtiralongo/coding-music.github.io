let term = "";
function updateTerm() {
  term = document.getElementById("searchTerm").value;
  console.log(term);
  // check term exist
  if (!term || term === "") {
    alert("Por favor ingrese uan palabra");
  } else {
    const url = `https://itunes.apple.com/search?term=${term}`;
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data.results);
        const artists = data.results;
        const resultados = JSON.stringify(data);
        sessionStorage.setItem('resultados', resultados);
        window.location.href = '/result.html';
      })
      .catch((error) => console.log("Request failed:", error));
  }
};

// const searchBtn = document.getElementById("searchTermBtn");
// searchBtn.addEventListener("click", updateTerm);
