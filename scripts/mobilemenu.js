const toggleBtn = document.querySelector('.toggle__button')
const navBar =document.querySelector('.nav__baar')

toggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
});
// fetch

// const Base__Url = 'https://tribe.api.fdnd.nl/v1'
// const form = document.querySelector('#memberform')

// // const renderMember = (data) => {
// //     data.data.forEach(post => {
// //         // console.log(post)            
// //        const Api__member = document.querySelector('.api__member').innerHTML +=
// //        ` <article class="studenten__api">
// //           <h4 class="te">${post.name} ${post.surname}</h4>
// //         </article>`
   
// //     })

// // }

// // red the post
// // method: Get

// fetch(Base__Url + '/member')
//     .then(res =>  res.json())
//     .then(data => fliterData(data))

// // oefenen
// const change = document.querySelector('.choose__naam')
// // console.log(change)
// change.addEventListener('change',(element) => {
    
//     console.log(element)
        

// })
// function fliterData(names){
   


// }