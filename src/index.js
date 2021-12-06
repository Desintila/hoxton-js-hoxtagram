const state = {
    posts: []
}
function renderImages() {
    const imageSection = document.querySelector('.image-container')
    imageSection.innerHTML = ''
    for (const post of state.posts) {
        const articleEl = document.createElement('article')
        articleEl.setAttribute('class', 'image-card')
        const h2El = document.createElement('h2')
        h2El.setAttribute('class', 'title')
        h2El.textContent = post.title
        const imgEl = document.createElement('img')
        imgEl.setAttribute('class', 'image')
        imgEl.setAttribute('src', post.image)
        const divEl = document.createElement('div')
        divEl.setAttribute('class', 'likes-section')
        const spanEl = document.createElement('span')
        spanEl.setAttribute('class', 'likes')
        spanEl.textContent = post.likes + 'likes'
        const buttonEl = document.createElement('button')
        buttonEl.setAttribute('class', 'like-button')
        buttonEl.textContent = '♥'
        const ulEl = document.createElement('ul')
        ulEl.setAttribute('class', 'comments')
        for (const comment of post.comments) {
            const liEl = document.createElement('li')
            liEl.textContent = comment.content
            ulEl.append(liEl)
        }
        divEl.append(spanEl, buttonEl)
        articleEl.append(h2El, imgEl, divEl, ulEl)
        imageSection.append(articleEl)
    }
}
function getPost() {
    return fetch('http://localhost:3000/images').then(function (resp) {
        return resp.json()
    })
}
getPost().then(function (postFromServer) {
    state.posts = postFromServer
    render()
})
function render() {
    renderImages()
}
render()