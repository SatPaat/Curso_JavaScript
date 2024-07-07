function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados digitados e tente novamente')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = "Homem"
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-criança-h.png')
            }else if(idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            }else if(idade > 21 && idade < 50){ 
                //adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            }else{
                //idoso 
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        }else if(fsex[1].checked){
            gênero = "Mulher"
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-criança-m.png')
            }else if(idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade > 21 && idade < 50){ 
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idosa-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com a idade de ${idade} anos`
        res.appendChild(img)
    }
}