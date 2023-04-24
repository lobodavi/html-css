function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value
    var trailerFilme = document.getElementById("trailer").value
    var elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML += '<a href=' + trailerFilme + 'target="_blank" rel="external"</a><img src=' + filmeFavorito + '>' 
    document.getElementById("filme").value = ''
    document.getElementById("trailer").value = ''
  }