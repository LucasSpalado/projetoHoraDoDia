function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#E8E15A'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#BD5A5A'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#2C363F'
    }
}
