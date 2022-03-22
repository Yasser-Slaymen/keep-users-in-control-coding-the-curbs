const smartzoner = document.querySelector('#smartzoneid')
const naamr = document.querySelector('#name')
const stadr = document.querySelector('#stad')
const locatier = document.querySelector('#locatie')
const functier = document.querySelector('#functie')
const timer = document.querySelector('#tijdstip')
const sizer = document.querySelector('#grootte')
const utilization = document.querySelector('#gebruik')
const description = document.querySelector('#omschrijving')
const imager = document.querySelector('#foto')
const submitBtn = document.querySelector('.btn--add')

content.addEventListener('click', (e) =>{
   e.preventDefault()
    let editBtuttonIsPressed = e.target.id == 'edit-post';
    let id = e.target.parentElement.dataset.id;

    if(editBtuttonIsPressed){
        
        const parent = e.target.parentElement
        let smartzoneid = parent.querySelector('.smart-zone').textContent
        let name = parent.querySelector('.name').textContent
        let town = parent.querySelector('.town').textContent
        let loction = parent.querySelector('.loction').textContent
        let functie = parent.querySelector('.functie').textContent
        let time = parent.querySelector('.time').textContent
        let size = parent.querySelector('.size').textContent
        let gebruikr = parent.querySelector('.gebruik').textContent
        let omschrijven = parent.querySelector('.omschrijven').textContent
        let image = parent.querySelector('.image').textContent
        
    
    
        smartzoner.value = smartzoneid
        naamr.value = name
        stadr.value = town
        locatier.value = loction
        functier.value = functie
        timer.value = time
        sizer.value = size
        description.value = omschrijven
        utilization.vlaue = gebruikr
        imager.value = image
      
 
    }

    // maken data let
    // let data = {
    //     smartzoneId: smartzoner.value,
    //     name: naamr.value,
    //     town:stadr.value ,
    //     location:locatier.value ,
    //     function:functier.value ,
    //     time:timer.value,
    //     size:sizer.value,
    //     utilization: utilization.vlaue,
    //     description:description.value,
    //     image:imager.value,

    // }
    // update post
    // method: Patch

    submitBtn.addEventListener('click', (e) =>{
        e.preventDefault()

        fetch(`${api_base}/${id}`,{
                 method:'PATCH',
                 headers:{
                       'Content-Type':'application/json'
                    },

                body:JSON.stringify({
       
        town:stadr.value ,
        location:locatier.value ,
        function:functier.value ,
        time:timer.value,
        size:sizer.value,
        utilization: utilization.vlaue,
        description:description.value,
       

                })

        })
        .then(res => res.json())
        .then(data => renderMember(data))
        
    })


})






// formPost.addEventListener('submit', (patch) => {
//     patch.preventDefault()

    

    // }

     // let data = {
    //     smartzoneId: document.querySelector('#smartzoneid').value,
    //     name: document.querySelector('#name').value,
    //     town: document.querySelector('#stad').value,
    //     location: document.querySelector('#locatie').value,
    //     function: document.querySelector('#functie').value,
    //     time: document.querySelector('#tijdstip').value,
    //     size: document.querySelector('#grootte').value,
    //     utilization: document.querySelector('#gebruik').value,
    //     description: document.querySelector('#omschrijving').value,
    //     image: document.querySelector('#foto').value,

    // }


//     fetch(BaseUrl + `/smartzone`,{
//        method:'PATCH',
//        headers:{
//            'Content-Type':'application/json'
//        },
//        body:JSON.stringify(data),
//     })
//     .then(res => res.json())
//     .then(data => renderMember(data))
//     .catch(
//         (error) => console.log('Error')
//     )
// })