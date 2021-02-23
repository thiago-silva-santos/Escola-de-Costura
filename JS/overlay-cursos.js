
const curso = document.querySelector('.box-cursos')
const descCursos = document.querySelector('.desc-cursos')

curso.addEventListener('click', () => {
    if (descCursos.classList.contains('has-it')) {
        descCursos.classList.remove('has-it')
}   
    else { // Fecha o menu
    descCursos.classList.add('has-it')
}

})