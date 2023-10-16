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
        console.log(phone)
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



loadPhones('oppo');