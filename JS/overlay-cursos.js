
//Identifica qual elemento foi clicado e adiciona nome à classe do mesmo
//Importante definir regra no CSS como: pointer-events: none para que alguns elementos não sejam clicados

const curso = document.querySelectorAll('.box-cursos')
const descCursos = document.querySelectorAll('.desc-cursos')

curso.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
    
        const elementoClicado = event.target

        if (elementoClicado.classList.contains('has-it')) {
            elementoClicado.classList.remove('has-it')
        }   
        else { // Fecha o menu
        elementoClicado.classList.add('has-it')
        }

    }
)});
    
