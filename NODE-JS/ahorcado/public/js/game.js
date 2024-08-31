import { GetWord } from './api.js';

export class gameStart {
    constructor() {
        this.trys = 4; // Número de intentos
        this.score = 1000; // Puntaje inicial
        this.word = ""; // Palabra a adivinar
        this.userGuess = ""; // Palabra del usuario
    }

    async startGame() {
        try {
            // Genera una palabra hasta que esta tenga 8 letras.
            while (this.word.length !== 5) {
                this.word = await GetWord.generateWord();
            }
            console.log('Palabra:', this.word);

            // Espera a que se introduzca la palabra y se aprete enter.
            document.getElementById('guess').addEventListener('keydown', (event) => {
                if (event.code === 'Enter') {
                    if ( this.trys != 0) {
                        // Llama a la funcion checkGuess para verificar si le pego.
                        const gameWord = this.checkGuess();
                        this.correctLetters(gameWord);
                    }
                }
            });
        } catch (error) {
            console.error('Error', error);
        }
    }
    checkGuess() {
        // Sacamos el valor del input y lo pasamos a upperCase para comparar
        this.userGuess = document.getElementById('guess').value.toUpperCase(); 
        if( userGuess.length > 5)
            {
                alert("Se necesita que la palabra tenga 8 o menos letras.")
                return
            }
        if (this.trys === 0){
                // TODO: El jugador perdio.
        }
        else if (this.word.includes(userGuess)){
                // TODO: El jugador gano.
        } else {
            this.trys -= 1
        }

        // Limpia el input para esperar a otro y actualizar los intentos.
        const attempts = document.getElementById('attempts')
        attempts.textContent = this.trys
        document.getElementById('guess').value = ''; 
        return this.correctLetters()
        
    }
    correctLetters()
    {
        const gameWord = this.word
        const lettersIndex = [0,1,2,3,4]
        const userGuess = this.usserGuess
        const lettersContainer = document.getElementById('container')
        
        if (this.trys === 3 || this.trys === 4){    
            // Selecciona cada recuadro dentro de .recuadros (letra)
            const letters = document.querySelectorAll('.letra')
            letters.forEach(function(letra,i){
                if (gameWord[i] === userGuess[i])
                {
                    letra.style.backgroundColor = '#0bc230' // Cambia el fondo a verde
                    letra.textContent = userGuess[i] // Añade la letra correcta
                }
                else if (gameWord.includes([userGuess[i]])){
                    letra.style.backgroundColor = "#DC820C"
                    letra.textContent = userGuess[i]
                }
                else { // El index actual no fue encontrando en gameWord
                    letra.style.backgroundColor = '#d81511' //Cambia a color rojo
                    letra.textContent = userGuess[i] // Añade la letra incorrecta
                }
                letra.style.width = '40px'
                letra.style.height = '40px'  
                letra.style.borderWidth = '2px';
            })
        } else {
            // Crea una nueva fila para las nuevas letras
            const newRow = document.createElement('div');
            newRow.classList.add('recuadros'); 
            newRow.style.marginBottom = '10px'; // Cambia 10px al valor deseado
            lettersIndex.forEach((index) => {
                const letra = document.createElement('div');
                letra.classList.add('letra');
                letra.style.width = '50px';
                letra.style.height = '40px';
                letra.style.borderWidth = '2px';

                if (gameWord[index] === userGuess[index])
                    {
                        letra.style.backgroundColor = '#0bc230' // Cambia el fondo a verde
                        letra.textContent = userGuess[index] // Añade la letra correcta
                    }
                    else if (gameWord.includes([userGuess[index]])){
                        letra.style.backgroundColor = "#DC820C"
                        letra.textContent = userGuess[index]
                    }
                    else { // El index actual no fue encontrando en gameWord
                        letra.style.backgroundColor = '#d81511' //Cambia a color rojo
                        letra.textContent = userGuess[index] // Añade la letra incorrecta
                    }

                newRow.appendChild(letra); // Agrega las letras a la nueva fila ya creada.
            });

            // Insertar la fila arriba de anteriores letas.
            lettersContainer.insertBefore(newRow, lettersContainer.firstChild);

        }
    }
}
