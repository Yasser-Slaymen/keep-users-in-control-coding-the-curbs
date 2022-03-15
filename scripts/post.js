
// const Base__Url = '#'
const formPost = document.querySelector('.form__post')

formPost.addEventListener('submit', (post) => {
    post.preventDefault()
    console.log("hallo")

    let data = {

    }

    fetch(Base__Url,{
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