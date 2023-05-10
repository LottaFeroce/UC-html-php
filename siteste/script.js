var som = new Audio()

function tocasom(value){
    let trilha = value

    switch (trilha){
        case 1:
            som.src ="./som/for whos sake.mp3"
            break
        case 2:
            som.src ='./som/your knife feels good.mp3'
            break
        case 3:
            som.src = './som/ghostbusters.mp3'
            break
        case 4:
            som.src = './som/lisaBoast.mp3'
        default:
            alert("musica Choster!!")
    }
som.play()
}