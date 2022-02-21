
document.getElementById("okPalavra").addEventListener("click", gravarPalavra)
let palavra = ''
let tamanhoFrase = []

function gravarPalavra() {
    palavra = document.getElementById("palavra").value.toUpperCase()

    for (let x = 0; x < palavra.length; x++) {
        tamanhoFrase.push('_')
    }

    document.getElementById("frase").innerHTML = tamanhoFrase.join(' ')


    if (document.getElementById('palavra').value != '') {
        document.getElementById('container-palavra').style.display = 'none'
    }

    document.getElementById('palavra').value = ''

}


document.getElementById('okLetra').addEventListener("click", pesquisarLetra)
let letrasDitas = []
let letra = ''

function pesquisarLetra() {
    letra = document.getElementById("letra").value.toUpperCase()

    if (letra === palavra) {
        document.getElementById("letra").value = ''
        document.getElementById("frase").innerHTML = palavra

    } else if (letra.length > 1) {
        document.getElementById("letra").value = ''
        alert('digite uma so letra ou a palavra certa')
    } else {

        let test1 = false

        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === letra) {
                test1 = true
                tamanhoFrase[i] = letra
                document.getElementById("frase").innerHTML = tamanhoFrase.join(' ')
                
                document.getElementById(`button-${letra}`).classList += ' press'
                document.getElementById(`button-${letra}`).style.background = 'rgb(76, 243, 84)'

            } else if (((palavra.length - 1) === i) && test1 === true) {
                letra = ''
            }
        }

        if (palavra[palavra.length - 1] == letra) {
            letra = ''
        }

        let test2 = false
        Externo:
        if (letra != '') {
            for (let i = 0; i < palavra.length; i++) {

                if (palavra[i] === letra) {
                    return test2 = true
                }
            }
            if (test2 === false) {
                for (let i = 0; i < letrasDitas.length; i++) {

                    if (letrasDitas[i] === letra) {
                        letra = ''
                        break Externo
                    }
                }
                if (letra !== palavra) {

                    document.getElementById(`button-${letra}`).classList += ' press'
                    document.getElementById(`button-${letra}`).style.background = 'rgb(255, 119, 119)'

                    letrasDitas.push(letra)
                }
            }
        }


        // document.getElementById('letrasDidas').innerHTML = letrasDitas
        document.getElementById("letra").value = ""
        document.getElementById('forca').style.backgroundImage = `url('img/forca${letrasDitas.length}.png')`

    }
}

function enterPress(event) {
    if (event.keyCode == 13) {
        pesquisarLetra()
    }
}

function enterPress2(event) {
    if (event.keyCode == 13) {
        gravarPalavra()
    }
}

document.getElementById('letra').addEventListener('keydown', enterPress)
document.getElementById('palavra').addEventListener('keydown', enterPress2)

// function toClick (){
//     let valor = document.getElementsByTagName('form').value
//     console.log(valor)
// }

// document.getElementsByTagName('form').addEventListener('click', toClick)