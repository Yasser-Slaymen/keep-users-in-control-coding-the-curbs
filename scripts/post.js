const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1'
const formPost = document.querySelector('.form__post')

formPost.addEventListener('submit', (post) => {
    post.preventDefault()

    let data = {
        smartzoneId: document.querySelector('#smartzoneid-y').value,
        name: document.querySelector('#name-y').value,
        town: document.querySelector('#stad-y').value,
        location: document.querySelector('#locatie-y').value,
        function: document.querySelector('#functie-y').value,
        time: document.querySelector('#tijdstip-y').value,
        size: document.querySelector('#grootte-y').value,
        utilization: document.querySelector('#gebruik-y').value,
        description: document.querySelector('#omschrijving-y').value,
        image: document.querySelector('#foto-y').value,

    }

    fetch(BaseUrl + `/smartzone`,{
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => renderMember(data))
    .catch(
        (error) => console.log('Error')
    )
    // reset input feild to empty state
    
     
})