function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var ola = window.document.getElementById('ola')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#aba8a3'
        ola.innerText = 'BOM DIA!'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#9aafc4'
        ola.innerText = 'BOA TARDE!'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1e3338'
        ola.innerText = 'BOA NOITE!'
    }
}
