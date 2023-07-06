function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.png')
                document.body.style.background = '#c5c5c5'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'adolescente-h.png')
                document.body.style.background = '#a68463'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
                document.body.style.background = '#c1c4c9'
            } else {
                //Idoso
                img.setAttribute('src', 'velho.png')
                document.body.style.background = '#a3e757'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina.png')
                document.body.style.background = '#ca828e'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'adolescente-m.png')
                document.body.style.background = '#3e785b'
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'mulher.png')
                document.body.style.background = '#c88447'
            } else {
                //Idosa
                img.setAttribute('src', 'velha.png')
                document.body.style.background = '#bc90cd'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
