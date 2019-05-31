

function scrollToElement(event) {
    const projetos = document.querySelector('#projetos')
    const html = document.getElementsByTagName('html')[0]
    const body = document.getElementsByTagName('body')[0]

    console.log('scrollin')
    body.scrollTo(500, 500)
}

function galleryImageClicked(event) {
    const sender = event.target

    if (!sender.classList.contains('current')) {
        document.querySelector('.current').classList.remove('current')
        document.querySelector('.featured-image-container img.opaque').classList.remove('opaque')
        sender.classList.add('current')




        const togglerIndex = sender.getAttribute('data-toggle')
        const targetId = `#container-image-${togglerIndex}`
        const element = document.querySelector(targetId)

        element.classList.add('opaque')
    }

}

function testclick() {
    console.log('teste')
}