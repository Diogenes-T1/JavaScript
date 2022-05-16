function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert(' [ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            genero = 'Masculino'
            if (idade >=0 && idade < 3){
                // bebe
                img.setAttribute('src', 'imagens/homem-bebe.png')
            }else if (idade < 12 ){
                // criança
            }else if (idade < 22){
                // jovem
            }else if (idade < 60){
                // adulto
            }else {
                //idoso
            }    
        } else if (fsex [1].checked){
            genero = 'Feminino'
            if (idade >=0 && idade < 3){
                // bebe
            }else if (idade < 12 ){
                // criança
            }else if (idade < 22){
                // jovem
            }else if (idade < 60){
                // adulto
            }else {
                //idoso
            }    
        } else if (fsex [2].checked){
            genero = 'Outro'
            if (idade >=0 && idade < 3){
                // bebe
            }else if (idade < 12 ){
                // criança
            }else if (idade < 22){
                // jovem
            }else if (idade < 60){
                // adulto
            }else {
                //idoso
            }    
        }
        res.innerHTML = `Você é do gênero ${genero} e tem ${idade} anos!`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}