
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = '22'
        msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <12) {

        img.src = 'imagens/fotomanha.png'
        window.document.body.style.background = '#dcdbed'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/fototarde.png'

        window.document.body.style.background = '#ffb94f'

    } else {
        img.src = 'imagens/fotonoite.png'
        window.document.body.style.background = '#333735'
    }
            
}

