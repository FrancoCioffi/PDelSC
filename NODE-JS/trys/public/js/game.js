export class gameStart {
    constructor() {
        this.trys = 4; // Número de intentos
        this.score = 1000; // Puntaje inicial
        this.word = ""; // Palabra a adivinar
    }
    async startGame() {
        var adivinar = ""
        var intento = ""
        const letra = document.querySelectorAll(".letra");
        await document.getElementById('adivinar').addEventListener('keydown', (event) => {
            if (event.code === 'Enter') {
                adivinar= document.getElementById('adivinar').value;
                alert(adivinar)
                }
            })
        await document.getElementById('intento').addEventListener('keydown',(event) => {
            if (event.code === 'Enter') {
                intento = document.getElementById('intento').value
                alert(intento)
                for(var i = 0;i<4;i++){
                    if (adivinar.includes(intento[i])) {
                        letra[i].style.backgroundColor = "#DC820C";
                        letra[i].style.width = '40px'
                        letra[i].style.height = '40px'
                        }
                }
            } 
        })
    }
}
