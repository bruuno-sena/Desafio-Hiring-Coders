const form = document.getElementById('form');

form.addEventListener('submit',(e) =>
 {
    e.preventDefault();
    

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead',convertData)

    let content = document.getElementById('content')
    let carregando = `<p>carregando...</p>`
    
    let pronto = `<p>E-mail cadastrado com sucesso! Você será redirecionado para nosso site!</p>`
    content.innerHTML = pronto
    

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})


let time = 5000,
currentImageIndex = 0,
images = document
            .querySelectorAll("#slider img")
max = images.length;

function nextImage() {

images[currentImageIndex]
    .classList.remove("selected")

currentImageIndex++

if(currentImageIndex >= max)
    currentImageIndex = 0

images[currentImageIndex]
    .classList.add("selected")
}

function start() {
setInterval(() => {
    // troca de image
    nextImage()
}, time)
}

window.addEventListener("load", start)
