 const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const formPost = document.querySelector('.form__post')

formPost.addEventListener('submit', (post) => {
    post.preventDefault()
    console.log("hallo")

    let data = {
        smartzonId: document.querySelector('#smartzoneid').value,
        name: document.querySelector('#name').value,
        town: document.querySelector('#stad').value,
        location: document.querySelector('#locatie').value,
        function: document.querySelector('#functie').value,
        time: document.querySelector('#tijdstip').value,
        size: document.querySelector('#grootte').value,
        utilization: document.querySelector('#gebruik').value,
        description: document.querySelector('#omschrijving').value,
        image: document.querySelector('#foto').value,

    }

    fetch(BaseUrl,{
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => renderMember(data))
    .catch(
        error => console.log('Error')
    )
})