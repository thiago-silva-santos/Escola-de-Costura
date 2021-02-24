
//Identifica qual elemento foi clicado e adiciona nome à classe do mesmo
//Importante definir regra no CSS como: pointer-events: none para que alguns elementos não sejam clicados

const curso = document.querySelectorAll('.box-cursos')

curso.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
    
        const elementoClicado = event.target

        if (elementoClicado.classList.contains('show-it')) {
            elementoClicado.classList.remove('show-it')
        }   
        else { // Adiciona a classe
        elementoClicado.classList.add('show-it')
        }

    }
)})
    
