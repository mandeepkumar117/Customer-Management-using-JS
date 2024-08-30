const hotel=()=>{
    let name=document.querySelector('#name').value;
    let hotel1=document.querySelector('#hotel1').value;
    let mobile=document.querySelector('#mobile').value;
    let email=document.querySelector('#email').value;
    let address=document.querySelector('#address').value;
    let room=document.querySelector('#room').value;
    let price=document.querySelector('#price').value;
    let adhar=document.querySelector('#adhar').value;
    let image=document.querySelector('#img').value;


    let customerdata={
        "name":name,
        "hotel":hotel1,
        "mobile":mobile,
        "email":email,
        "address":address,
        "room":room,
        "price":price,
        "adhar":adhar,
        "image":image
    }

     console.log(customerdata);
    //  window.alert(customerdata);


    let url='https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails';
    let method={
        method:"POST",
        header:{
            'content-type':'application/json'
        },
        body:JSON.stringify(customerdata)
    }
   fetch(url,method);


  
}



(async function(){
    let data=await fetch('https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails');
    let response=await data.json();

    let ot=document.querySelector('#showdata');
    ot.innerHTML=response.map(e=>`
         <tr>
         <td>${e.name}</td>
         <td>${e.hotel}</td>
         <td>${e.mobile}</td>
         <td>${e.email}</td>
         <td>${e.address}</td>
         <td>${e.room}</td>
         <td>${e.price}</td>
         <td>${e.adhar}</td>
         <td><img width="100px" src="${e.image}"></td>
         <td style="text-align: center;  vertical-align: middle;" onclick="del('${e.id}')"><i class="fa-solid fa-trash" style="color: red;"></i></td>
         <td style="text-align: center;  vertical-align: middle;" onclick="edit('${e.id}')"><i class="fa-solid fa-pen" style="color: blue; text-align: center;  vertical-align: middle;"></i></td>
        </tr>
        `).join("");
        console.log(response);
   })()

   function del(arg){
    console.log(arg);
    let url=`https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails/${arg}`;
    let method={
        method:"DELETE"
    }
    fetch(url,method);
}


let storeid = null;
 async function edit(arg){
   
     storeid = arg;

     let data = await fetch(`https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails/${arg}`);
     let response = await data.json();
     console.log(response)
      
     let selectupdate = document.querySelector('.hotel');
     selectupdate.style.display = "block";


     
     document.querySelector('#name1').value = response.name;
     document.querySelector('#hotel2').value = response.hotel;
     document.querySelector('#mobile1').value = response.mobile;
     document.querySelector('#email1').value = response.email;
     document.querySelector('#address1').value = response.address;
     document.querySelector('#room1').value = response.room;
     document.querySelector('#price1').value = response.price;
     document.querySelector('#adhar1').value = response.adhar;
     document.querySelector('#img1').value = response.image;

}
const updatebutton = ()=>{
    let name1=document.querySelector('#name1').value;
    let hotel2= document.querySelector('#hotel2').value;
    let mobile1= document.querySelector('#mobile1').value;
    let email1= document.querySelector('#email1').value;
    let address1= document.querySelector('#address1').value;
    let room1= document.querySelector('#room1').value;
    let price1= document.querySelector('#price1').value;
    let adhar1= document.querySelector('#adhar1').value;
    let img1= document.querySelector('#img1').value;

    

    let product = {
     "name":name1,
     "hotel":hotel2,
     "mobile":mobile1,
     "email":email1,
     "address":address1,
     "room":room1,
     "price":price1,
     "adhar":adhar1,
     "image":img1
  }

    let url = `https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails/${storeid}`;
    let method = {
         method:"PUT",
         header:{
              "content-type":"application/json"
         },
         body:JSON.stringify(product)
    }
    fetch(url,method);
   
}






// async function upd(arg) {
//     let data =await fetch(`http://localhost:4000/customerdetails/${arg}`);
//     let response=await data.json();
//     console.log(response);
//     let select =document.querySelector('#form');
//     select.style.display="block";
//     document.querySelector('#name').value=response.name;
//     document.querySelector('#hotel1').value=response.hotel1;
//     document.querySelector('#img').value=response.img;
//     document.querySelector('#email').value=response.email;
//     document.querySelector('#price').value=response.price;
//     document.querySelector('#img').value=response.img;
//     document.querySelector('#mobile').value=response.mobile;
//     document.querySelector('#address').value=response.address;
//     document.querySelector('#room').value=response.room;
//     document.querySelector('#price').value=response.price
// }