
// Delete-method
content.addEventListener('click', (e) => {

    e.preventDefault()
    let delBtuttonIsPressed = e.target.id == 'delete-post';
    // let editBtuttonIsPressed = e.target.id == 'edit-post';
    let id = e.target.parentElement.dataset.id;

  //    method: Delete
 
 if(delBtuttonIsPressed){
    
    fetch(`${api_base}/${id}`,{
        method:'DELETE',
    })
    .then(res => res.json())
    .then(() => location.reload())

 }
 
 })
 