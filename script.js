
document.getElementById("okPalavra").addEventListener("click", gravarPalavra)
let palavra = ''
let tamanhoFrase = []

function gravarPalavra() {
    palavra = document.getElementById("palavra").value
    
    let ar = palavra.split('')
    console.log(ar)
    for(let x =0; x<ar.length ; x++){
        tamanhoFrase.push('_')
    }
    
    document.getElementById("frase").innerHTML = tamanhoFrase
    
    
    if (document.getElementById('palavra').value != '' ) {
        document.getElementById('container-palavra').style.display = 'none'
    }
    
    document.getElementById('palavra').value = ''
}


document.getElementById('okLetra').addEventListener("click",pesquisarLetra)
let letrasDitas = []
let contador = 0
let letra = ''

function pesquisarLetra() {
    letra = document.getElementById("letra").value
    let test1 = false

    for (let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra){
            test1 = true
            tamanhoFrase[i] = letra
            document.getElementById("frase").innerHTML = tamanhoFrase
        }else if(((palavra.length-1) === i) && test1 === true){
            letra=''
        }
        
    }
    
    if (letra === palavra) {
        document.getElementById("frase").innerHTML = palavra
    }


    let test2 = false

    if (letra != '') {
        for (let i = 0; i < palavra.length; i++) {

            if(palavra[i] === letra){
                return test2 = true
            }
        }
        if (test2 === false) {
            letrasDitas.push(letra)   
        }
    }

    document.getElementById('letrasDidas').innerHTML = letrasDitas
    document.getElementById("letra").value = ""
    document.getElementById('forca').innerHTML = letrasDitas.length
}