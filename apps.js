// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089


// ============ loadPhone API ===========//
const loadPhones=async(searchText,limit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res=await fetch(url);
    const data=await res.json();
    displayPhones(data.data,limit)
};


// =========== displayPhone function ===========//
const displayPhones=(phones,limit)=>{
    const phoneContainer=document.getElementById('phone-container');
    // ===========  error text ==============//

    const errorText=document.getElementById('error-text');
    if (phones.length===0) {
        errorText.classList.remove('d-none')
    }
    else{
        errorText.classList.add('d-none')
    }

    // ========= show all button ===========//
    const showAll=document.getElementById('show-btn');
    if (phones.length>6 && limit) {
        phones=phones.slice(0,6);
        showAll.classList.remove('d-none')
    } else {
        showAll.classList.add('d-none')
    }


    phoneContainer.innerText=' ';
    phones.forEach(phone => {
        const {brand,image,phone_name,slug}=phone;
       const oneDiv=document.createElement('div');
       oneDiv.classList.add('col');
       oneDiv.innerHTML=`
       <div class="card h-100">
            <img src=${image} class="card-img-top img-fluid w-75 mx-auto py-3 rounded-3" alt="phone">
            <div class="card-body">
              <h5 class="card-title text-center text-info py-2">${brand}</h5>
              <h6 class='text-center'>Device : ${phone_name}</h6>
              <h6 class='text-center'>Model : ${slug.length>17? slug.slice(0,17):slug}</h6>
            </div>
            <div class='text-center py-2 mb-3'>
            <button type="button" onclick="showPhoneDetails('${slug}')" class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Details ...</button>      
            </div>
          </div>
       `

       phoneContainer.appendChild(oneDiv);
    });
   
}

// =========== show all function ==============//

const showAllPhones=(limit)=>{
    const searchText=document.getElementById('input-field').value;
    loadPhones(searchText,limit);
}


// ================  search btn =============//

document.getElementById('search-btn').addEventListener('click',function () {
    showAllPhones(6);
    
})

document.getElementById('show-all').addEventListener('click',function () {
    const searchText=document.getElementById('input-field').value;
    showAllPhones();
    loadPhones(searchText);
})


const showPhoneDetails=async(id)=>{
const url=`https://openapi.programming-hero.com/api/phone/${id}`
const res=await fetch(url);
const data=await res.json();
showPhoneModal(data.data)
}

// ========= show phone modal ==========//

const showPhoneModal=(phone)=>{
    const {brand,image,mainFeatures,name,others,releaseDate}=phone;
const modalTitle=document.getElementById('exampleModalLabel');
modalTitle.innerHTML=`<h5 class="text-center text-info">${name}</h5>`
const modalBody=document.getElementById('modal-body');
modalBody.innerHTML=`

<div class="card">
            <img src=${image} class="card-img-top img-fluid w-50 mx-auto py-2 mt-2 rounded-3" alt="phone">
            <div class="card-body">
              <h5 class="card-title text-center text-info py-2">${brand}</h5>
              <h6 class='text-center'>Display : ${mainFeatures?.displaySize?mainFeatures?.displaySize.slice(0,22):'Not Found'}</h6>
              <h6 class='text-center'>Memory : ${mainFeatures?.memory?mainFeatures?.memory.slice(0,20):'Not Found'}</h6>
              <h6 class='text-center'>Bluetooth : ${others?.Bluetooth?others?.Bluetooth:'Not Found'}</h6>
              <h6 class='text-center text-secondary'> ${releaseDate?releaseDate:'Not Found'}</h6>
              
            </div>
          </div>

`
console.log(phone)
}


loadPhones('oppo');