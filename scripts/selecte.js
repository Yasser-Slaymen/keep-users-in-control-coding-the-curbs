const api_base = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const selecte = document.querySelector('.selecte')
const content = document.querySelector('.api__informatie')

getData()

async function getData(){
    
    try{
        const respons = await fetch(api_base)
        const data = await respons.json()

       printData(data)

    }catch(err){
        console.log("Error:" , err.message)

    }
}

function printData(data){

//    slect bij name
    selecte.innerHTML += `
    <select name="format" class="choose__naam" onchange = "getNm(this.value)">
    <option selected disabled >please choose an naam</option>
    ${data.data.map(naam => `<option>${naam.name}</option>`)}

   </select>

    `
    //  slect bij town
    selecte.innerHTML += `
    <select name="format" class="choose__naam" onchange = "getNm(this.value)">
    <option selected disabled >please choose an city</option>
    ${data.data.map(naam => `<option>${naam.town}</option>`)}

   </select>
    `
    //  slect bij id
    selecte.innerHTML += `
    <select name="format" class="choose__naam" onchange = "getNm(this.value)">
    <option selected disabled >please choose an ID</option>
    ${data.data.map(naam => `<option>${naam.smartzoneId}</option>`)}

   </select>
    `


  
}



async function getNm(value) {

      const res = await fetch(api_base)
      const data = await res.json()
        
        // filter
        
       const zonesfilter = data.data.filter(naam => {
        
            return naam.name === value || naam.town === value || naam.smartzoneId == value
        })
         .map(naam => {

    content.innerHTML += ` 
    <il id>SmartzoneId: ${naam.smartzoneId}</il>
    <il>Naam: ${naam.name}</il>
    <il>Stad: ${naam.town}</il>
    <il>Locatie: ${naam.location}</il>
    <il>Functie: ${naam.function}</il>
    <il>TijdStip: ${naam.time}</il>
    <il>Grootte-plek: ${naam.size}</il>
    <il>Grbruik(%): ${naam.utilization}</il>
    <il>Omschrijving: ${naam.description}</il>
    <il class="conte">Foto: <img src="${naam.image}" alt="" width="300px"
     height="200px">
    </il>
    <button class="form__button btn--delete" id="edit--post">Edit</button>
    <button class="form__button btn--delete" id="delete-post">
      delete
    </button>

    ` 
  })
     


}

    
    
    
  