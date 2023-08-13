// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

// ========= display Phones ===========//

const displayPhone=async()=>{
  const url='https://openapi.programming-hero.com/api/phones?search=oppo'
    const res=await fetch(url)
    const data=await res.json();
    showPhones(data.data)
};

const showPhones=(phones)=>{
    const phoneDiv=document.getElementById('phone-container')
    phones.forEach(phone => {
        const {image,phone_name,brand,slug}=phone;
    const oneDiv=document.createElement('div');
    oneDiv.innerHTML=`
    <div class="col">
    <div class="card">
      <img src=${image} class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title text-center text-success">${brand}</h3>
        <h4 class="text-center">Phone Model : ${phone_name}</h4>
        <p class="card-text text-center">
        
            ${slug.length>10 ? slug.slice(0,19): {slug} }  
        
        </p>
      </div>
    </div>
  </div>
    
    `
    phoneDiv.appendChild(oneDiv)
    });
}


displayPhone();