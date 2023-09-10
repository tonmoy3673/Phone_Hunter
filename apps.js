// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

// ========= loadPhone ================//
const loadPhone=async()=>{
    const url='https://openapi.programming-hero.com/api/phones?search=iphone';
    const res= await fetch(url);
    const data=await res.json();
    console.log(data.data);
};
loadPhone();