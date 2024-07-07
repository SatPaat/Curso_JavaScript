function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia
        document.body.style.background = 'rgb(199, 156, 88)'
        //document.body.style.background = '#f3cd0f'
        img.src = 'manhã.png'
        
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        document.body.style.background = 'rgb(248, 167, 140)'
        //document.body.style.background = '#f8a78c'
        img.src = 'Tarde.png'
    }else {
        //boa noite
        document.body.style.background = 'rgb(17, 25, 57)'
        //document.body.style.background = '#111939'
        img.src = 'Noite.png'
    }
    
}