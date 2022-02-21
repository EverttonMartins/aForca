// A
function toClickA (){
    letra = document.getElementById('button-A').value.toUpperCase()

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
// B
function toClickB (){
    letra = document.getElementById('button-B').value.toUpperCase()

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
// C
function toClickC (){
    letra = document.getElementById('button-C').value.toUpperCase()

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
// D
function toClickD (){
    letra = document.getElementById('button-D').value.toUpperCase()

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
// E
function toClickE (){
    letra = document.getElementById('button-E').value.toUpperCase()

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
// F
function toClickF (){
    letra = document.getElementById('button-F').value.toUpperCase()

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
// G
function toClickG (){
    letra = document.getElementById('button-G').value.toUpperCase()

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
// H
function toClickH (){
    letra = document.getElementById('button-H').value.toUpperCase()

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
// I
function toClickI (){
    letra = document.getElementById('button-I').value.toUpperCase()

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
// J
function toClickJ (){
    letra = document.getElementById('button-J').value.toUpperCase()

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
// L
function toClickL (){
    letra = document.getElementById('button-L').value.toUpperCase()

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
// M
function toClickM (){
    letra = document.getElementById('button-M').value.toUpperCase()

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
// N
function toClickN (){
    letra = document.getElementById('button-N').value.toUpperCase()

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
// O
function toClickO (){
    letra = document.getElementById('button-O').value.toUpperCase()

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
// P
function toClickP (){
    letra = document.getElementById('button-P').value.toUpperCase()

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
// Q
function toClickQ (){
    letra = document.getElementById('button-Q').value.toUpperCase()

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
// R
function toClickR (){
    letra = document.getElementById('button-R').value.toUpperCase()

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
// S
function toClickS (){
    letra = document.getElementById('button-S').value.toUpperCase()

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
// T
function toClickT (){
    letra = document.getElementById('button-T').value.toUpperCase()

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
// U
function toClickU (){
    letra = document.getElementById('button-U').value.toUpperCase()

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
// V
function toClickV (){
    letra = document.getElementById('button-V').value.toUpperCase()

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
// X
function toClickX (){
    letra = document.getElementById('button-X').value.toUpperCase()

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
// Z
function toClickZ (){
    letra = document.getElementById('button-Z').value.toUpperCase()

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
// W
function toClickW (){
    letra = document.getElementById('button-W').value.toUpperCase()

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
// Y
function toClickY (){
    letra = document.getElementById('button-Y').value.toUpperCase()

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
// K
function toClickK (){
    letra = document.getElementById('button-K').value.toUpperCase()

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


document.getElementById('button-A').addEventListener('click', toClickA)
document.getElementById('button-B').addEventListener('click', toClickB)
document.getElementById('button-C').addEventListener('click', toClickC)
document.getElementById('button-D').addEventListener('click', toClickD)
document.getElementById('button-E').addEventListener('click', toClickE)
document.getElementById('button-F').addEventListener('click', toClickF)
document.getElementById('button-G').addEventListener('click', toClickG)
document.getElementById('button-H').addEventListener('click', toClickH)
document.getElementById('button-I').addEventListener('click', toClickI)
document.getElementById('button-J').addEventListener('click', toClickJ)
document.getElementById('button-L').addEventListener('click', toClickL)
document.getElementById('button-M').addEventListener('click', toClickM)
document.getElementById('button-N').addEventListener('click', toClickN)
document.getElementById('button-O').addEventListener('click', toClickO)
document.getElementById('button-P').addEventListener('click', toClickP)
document.getElementById('button-Q').addEventListener('click', toClickQ)
document.getElementById('button-R').addEventListener('click', toClickR)
document.getElementById('button-S').addEventListener('click', toClickS)
document.getElementById('button-T').addEventListener('click', toClickT)
document.getElementById('button-U').addEventListener('click', toClickU)
document.getElementById('button-V').addEventListener('click', toClickV)
document.getElementById('button-X').addEventListener('click', toClickX)
document.getElementById('button-Z').addEventListener('click', toClickZ)
document.getElementById('button-W').addEventListener('click', toClickW)
document.getElementById('button-Y').addEventListener('click', toClickY)
document.getElementById('button-K').addEventListener('click', toClickK)