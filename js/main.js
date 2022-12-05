let row = document.querySelector('.row')

function getCards(){
fetch('https://api.sampleapis.com/coffee/hot')
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        row.innerHTML += `
        <div class="card">
        <h2>${item.title}</h2>
        <img src="${item.image}" width="250" height="250">
        <h5>${item.description}</h5>
        <p><b>ingredients:</b><br><em>${item.ingredients}</em></p>
        </div>
        `
    })
})
}
getCards()