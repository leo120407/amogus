function addlinha() {
    var amogus = document.getElementById('cont')
    var num = Math.floor(Math.random()*10)
    if (num == 3) {
        amogus.innerHTML += 'W00000W ⠇⠄⢰⣿⣿⡇⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢸⣿⣿'
    }
    else {
    amogus.innerHTML += '       ⠇⠄⢰⣿⣿⡇⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢸⣿⣿'
    }
}