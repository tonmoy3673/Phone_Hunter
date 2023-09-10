// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

// ========= loadPhone ================//
const loadPhone=async(text,limit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${text}`;
    const res= await fetch(url);
    const data=await res.json();
    displayPhone(data.data,limit);
};


// ==========  Display Phone ==========//
const displayPhone=(phones,limit)=>{
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.innerText='';




   const errorText=document.getElementById('error-text');
   if ( phones.length===0) {
        errorText.classList.remove('d-none')
   } else {
    errorText.classList.add('d-none')
   }

   //    ======== showAll ==========//
const showAll=document.getElementById('show-btn');
   if (limit && phones.length>9) {
        phones=phones.slice(0,6);
        showAll.classList.remove('d-none');
   }
   else{
    showAll.classList.add('d-none')
   }

    phones.forEach(phone => {
    // console.log(phone);
    const {brand,image,phone_name,slug}=phone;
    
    const oneDiv=document.createElement('div');
    oneDiv.innerHTML=`
     <div class="col">
    <div class="card pt-3 text-center">
      <img src=${image} class="card-img-top w-75 mx-auto py-2" alt="phoneImage">
      <div class="card-body">
        <h4 class="card-title text-info fw-bolder">${brand}</h4>
        <h5 class="card-text ">${phone_name}</h5>
        <h6 class="card-text text-secondary">${slug}</h6>
      </div>
    </div>
  </div>
    `
    phoneContainer.appendChild(oneDiv);
    });


};


// ======== show Limited ======//

const limitPhones=(limit)=>{
    const inputText=document.getElementById('input-field');
    const text=inputText.value;
    loadPhone(text,limit);
}


// ========== Search button ============//

document.getElementById('search-btn').addEventListener('click',function () {
    limitPhones(6);
})

// ========= press enter ========//

document.getElementById('input-field').addEventListener('keypress',function (e) {
 
    if (e.key==='Enter') {
       limitPhones(6);
    }
   
})

// ======= display phones limit ============//
document.getElementById('show-all').addEventListener('click',function () {
    limitPhones()
    const inputText=document.getElementById('input-field');
    const text=inputText.value;
    loadPhone(text)
})



