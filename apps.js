// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

// ========= loadPhone ================//
const loadPhone=async(text)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${text}`;
    const res= await fetch(url);
    const data=await res.json();
    displayPhone(data.data);
};


// ==========  Display Phone ==========//
const displayPhone=(phones)=>{
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.innerText='';
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

// ========== Search button ============//

document.getElementById('search-btn').addEventListener('click',function () {
    const inputText=document.getElementById('input-field');
    const text=inputText.value;
    loadPhone(text);
})

// ========= press enter ========//

document.getElementById('input-field').addEventListener('keypress',function (e) {
 
    if (e.key==='Enter') {
        const inputText=document.getElementById('input-field');
        const text=inputText.value;
        loadPhone(text);
    }
   
})

loadPhone('oppo');