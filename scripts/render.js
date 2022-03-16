
const renderMember = (data)=> {
    data.data.forEach(get => {
        const smartezones = document.querySelector('#smarte__zones')
        // const smartezones = document.querySelector('.choose__naam')
       
        smartezones.innerHTML += `
        <select name="format" class="choose__naam">

        <option selected disabled>please choose an naam</option>
        <option value="Tijn">${get.name}</option>
        

        </select>
        
        `



    })
}