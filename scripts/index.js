

function scrollToElement(event) {
    let projetos = document.querySelector('#projetos')
    let html = document.getElementsByTagName('html')[0]
    let body = document.getElementsByTagName('body')[0]

    console.log('scrollin')
    body.scrollTo(500, 500)
}

function galleryImageClicked(event) {
    const sender = event.target

    if (!sender.classList.contains('current')) {
        document.querySelector('.current').classList.remove('current')
        sender.classList.add('current')

        console.log(sender.src)

        const featuredImage = document.querySelector('#imagem-projeto')
        featuredImage.src = sender.src
    }

}