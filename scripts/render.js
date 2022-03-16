
const renderMember = (data)=> {
    data.data.forEach(get => {
        const test = document.querySelector('.test').innerHTML +=
        `<h3> ${get.name}<h3/>`

    })
}