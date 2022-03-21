// Delete-method
content.addEventListener('click', (e) => {
    e.preventDefault()
   
    let delBtuttonIsPressed = e.target.id == 'delete-post';
    let editBtuttonIsPressed = e.target.id == 'edit-post';
 
    console.log(e.target.parentElement.dataset.Id)
 
 //    method: Delete
 
 if(delBtuttonIsPressed){
 
     fetch(`${api_base}dddd`)
     
 }

 })
 // end- delete method