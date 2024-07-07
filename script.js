const openModalButton= document.querySelectorAll("[data-modal-target]");
const closeModalButton= document.querySelectorAll("[data-close-button]");

const overlay=document.getElementById('overlay');

openModalButton.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal=document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})


overlay.addEventListener('click',()=>{
    const modals=document.querySelectorAll('.modal.active');
    modals.forEach(modal=>{
        closeModal(modal);
    })
})

closeModalButton.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal=button.closest(".modal");
        closeModal(modal);
    })
})


function openModal(modal){
    if(modal==null)return ;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal){
    if(modal==null)return ;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}


const submitButton=document.getElementById('submitButton');
console.log(submitButton);

submitButton.addEventListener("click",()=>{
    console.log("yes clicked");
    const userName=document.getElementById('userName').value;
    const userEmail=document.getElementById('userEmail').value;
    const userAge=document.getElementById('userAge').value;
    const userCountry=document.getElementById('country').value;
    console.log(userName,userEmail,userAge,userCountry);
    document.getElementById('displayName').innerText=userName;
    document.getElementById('displayEmail').innerText=userEmail;
    document.getElementById('displayAge').innerText=userAge;
    document.getElementById('displayCountry').innerText=userCountry;
})