const Basurl ='https://codingthecurbs.api.fdnd.nl/v1'

loading('on')

// fetch
    fetch(Basurl+'/smartzone')
    .then(res => res.json())
    .then(data => {
        loading('off')
        renderMember(data)
        })
    .catch(err => error(err))
