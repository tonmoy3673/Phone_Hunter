// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

// ========= display Phones ===========//

const displayPhone=async(inputText,limit)=>{
  const url=`https://openapi.programming-hero.com/api/phones?search=${inputText}`
    const res=await fetch(url)
    const data=await res.json();
    showPhones(data.data,limit)
};

const showPhones=(phones,limit)=>{
    const phoneDiv=document.getElementById('phone-container');
    

    phoneDiv.innerText='';
    phones=phones.slice(0,9);
    const errorMessage=document.getElementById('error-message');
    if (phones.length===0) {
      errorMessage.classList.remove('d-none')
    } else {
      errorMessage.classList.add('d-none')
    }
    phones.forEach(phone => {
     
        const {image,phone_name,brand,slug}=phone;
    const oneDiv=document.createElement('div');
    oneDiv.innerHTML=`
    <div class="col">
    <div class="card">
      <img src=${image} class="card-img-top img-fluid w-75 d-block mx-auto mt-3 pt-3" alt="...">
      <div class="card-body">
        <h3 class="card-title text-center text-success">${brand}</h3>
        <h4 class="text-center">Phone Model : ${phone_name.length>10 ? phone_name.slice(0,10):`${phone_name}`}</h4>
        <p class="card-text text-center">
        
            ${slug.length>10 ? slug.slice(0,19)+' ' +'...More': `${slug}` }  
        
        </p>
      </div>
    </div>
  </div>
    
    `
    phoneDiv.appendChild(oneDiv)
    });
    toggleSpinner(false);
};

const phoneLimit=(limit)=>{
  toggleSpinner(true);
  const inputField=document.getElementById('input-field');
  const inputText=inputField.value;
  displayPhone(inputText,limit);
  inputField.value='';
}

document.getElementById('search-btn').addEventListener('click',function () {
  toggleSpinner(true);
  const inputField=document.getElementById('input-field');
  
  displayPhone(limit);
  inputField.value='';
});


// ======== spinner function ============//

const toggleSpinner=(isLoading)=>{
  const loaderSpin=document.getElementById('spinner');
  if (isLoading) {
    loaderSpin.classList.remove('d-none')
  } else {
    loaderSpin.classList.add('d-none')
  }
};

// ========= show all button ============//

document.getElementById('show-btn').addEventListener('click',function () {
  displayPhone(inputText);
});




displayPhone('oppo');