function perfil() {
    let user = document.getElementById('user').value
    let img = document.getElementById('perfil')
    if (user == 'iron tony') {
        img.src = 'imagens/iron-perfil.png'
    } else if (user == 'cap steve') {
        img.src = 'imagens/cap-perfil.png'
    } else {
        img.src = 'imagens/shield.png'
    }

}
function logIn() {
    user = document.getElementById('user').value
    let senha = document.getElementById('pass').value
    if (user == 'iron tony' && senha == 'iloveu3000') {
        location.href = "iron.html"
    } else if (user == 'cap steve' && senha == 'peggy') {
        location.href = "cap.html"
    } else {
        alert('Usuário ou senha incorreto!')
    }
}


