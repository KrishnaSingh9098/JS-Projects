let openSignup=   document.getElementById('form')
let closeSignup=   document.getElementById('ill')
 let signupPopup=   document.getElementById('signupPopup')

form.addEventListener('click',()=>{
    signupPopup.style.display='block'

})

ill.addEventListener('click',()=>{
    signupPopup.style.display='none'
})