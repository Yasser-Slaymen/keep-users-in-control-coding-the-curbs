const api_base = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const selecte = document.querySelector('.selecte')
const content = document.querySelector('.api__informatie')

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
    //  console.log(data.data)
    selecte.innerHTML += `
    <select name="format" class="choose__naam" onchange = "getNm(this.value)">
    <option selected disabled>please choose an naam</option>
    ${data.data.map(naam => `<option>${naam.name}</option>` )}

   </select>
    `
}

// `${api_base}${name}`
// chang function
   async function getNm(name) {
      const res = await fetch(api_base)
      const data = await res.json()
    // console.log(data.data[2].time)

    content.innerHTML += `
    <il>Naam: ${data.data[0].name}</il>
    <il>Stad: ${data.data[0].town}</il>
    <il>Locatie: ${data.data[0].location}</il>
    <il>Functie: ${data.data[0].function}</il>
    <il>TijdStip: ${data.data[0].time}</il>
    <il>Grootte-plek: ${data.data[0].size}</il>
    <il>Grbruik(%): ${data.data[0].utilization}</il>
    <il>Omschrijving: ${data.data[0].description}</il>
    <il class="conte">Foto: <img src="${data.data[0].image}" alt="" width="300px"
     height="200px">
     </il>
    `


}
getNm()
    
    
    
  