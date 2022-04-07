// api link
const api_Base = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

const smartzoner = document.querySelector('#smartzoneid-y')
const naamr = document.querySelector('#name-y')
const stadr = document.querySelector('#stad-y')
const locatier = document.querySelector('#locatie-y')
const functier = document.querySelector('#functie-y')
const timer = document.querySelector('#tijdstip-y')
const sizer = document.querySelector('#grootte-y')
const utilization = document.querySelector('#gebruik-y')
const description = document.querySelector('#omschrijving-y')
const imager = document.querySelector('#foto-y')

// btn 
const submitBtn = document.querySelector('.btn--add')

// 

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

        // put content in input veild
        smartzoner.value = smartzoneid.replace(/\D/gm, '')
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

    //  update the existing post 
    // method:PATCH
    
    submitBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        console.log(e)

        fetch(`${api_Base}/${id}`,{
                 method:'PUT',
                 headers:{
                       'Content-Type':'application/json'
                    },

                body:JSON.stringify({

                    smartzoneId: smartzoner.value,
                    name: naamr.value,
                    town:stadr.value ,
                    location:locatier.value ,
                    function:functier.value ,
                    time:timer.value,
                    size:sizer.value,
                    utilization: utilization.vlaue,
                    description:description.value,
                    image:imager.value,
       
                })

        })
        .then(res => res.json())
        .then(() => loction.reload)
        
    })


})






