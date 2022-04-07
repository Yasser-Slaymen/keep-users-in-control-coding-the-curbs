const api_base = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const selecte = document.querySelector('.selecte')
const content = document.querySelector('.content')

getData()
// fetch api
async function getData(){
    
    try{
        const respons = await fetch(api_base)
        const data = await respons.json()

       printData(data)

    }catch(err){
        console.log("Error:" , err.message)
        alert('oops Erorr,iets loopt fout')

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
    <option>Amsterdam</option>
    <option>Rotterdam</option>
    <option>Schiedam</option>
    <option>Utrecht</option>

   </select>
    `
    //  slect bij id
    selecte.innerHTML += `
    <select name="format" class="choose__naam" onchange = "getNm(this.value)">
    <option selected disabled >please choose an ID</option>
    <option>16</option>
    <option>17</option>
    <option>155</option>
    <option>174</option>
    <option>175</option>
    <option>177</option>
    <option>178</option>
    <option>187</option>

   </select>
    `


  
}



async function getNm(value) {
console.log(value)
      const res = await fetch(api_base)
      const data = await res.json()

      
      
        
        // filter
        
       const zonesfilter = data.data.filter(naam => {
        
            return naam.name === value || naam.town === value || naam.smartzoneId == value
        })
         .map(naam => {

    content.innerHTML += ` 
    <ul class="api__informatie" data-id= ${naam.smartzoneId}>
    <il class="smart-zone">SmartzoneId: ${naam.smartzoneId}</il>
    <il class="name">Naam: ${naam.name}</il>
    <il class="town">Stad: ${naam.town}</il>
    <il class="loction">Locatie: ${naam.location}</il>
    <il class="functie">Functie: ${naam.function}</il>
    <il class="time">TijdStip: ${naam.time}</il>
    <il class="size">Grootte-plek: ${naam.size}</il>
    <il class="gebruik">Grbruik(%): ${naam.utilization}</il>
    <il class="omschrijven">Omschrijving: ${naam.description}</il>
    <il class="image"><img src="${naam.image}" alt="" width="300px"
        height="200px">
    </il>

     <a href="#"  class="form__button btn--delete" id="delete-post">delete</a>
     <a href="#"  class="form__button btn--edit" id="edit-post">Edite</a>

   </ul>
    

    ` 
  })
     


}

    
    
    
  