const api_base = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const selecte = document.querySelector('.selecte')
const content = document.querySelector('.api__informatie')
let x = ['Tijn', 'Sarah', 'Manon', 'Ahmed', 'Olivia', 'Karel', 'Wafa', 'Wicher']
const w = ['Wafa']

getData()

async function getData(){
    
    try{
        const respons = await fetch(api_base)
        const data = await respons.json()

       printData(data)

    }catch(e){
        console.log("Error:" , e.message)

    }
}

function printData(data){
   
    selecte.innerHTML += `
    <select name="format" class="choose__naam" onchange = "getNm(this.value)">
    <option selected disabled >please choose an naam</option>
    ${data.data.map(naam => `<option>${naam.name}</option>`)}

   </select>
    `
  
}

// `${api_base}${e}`

async function getNm() {


      const res = await fetch(api_base)
      const data = await res.json()
         console.log(data.data)
        // filter
         data.data.filter(naam => naam.name)

         .map(naam => {

    content.innerHTML += ` 

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
    ` 
  })
     


}

    
    
    
  