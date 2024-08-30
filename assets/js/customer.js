const addproduct=()=>{
    let select=document.querySelector('.form');
    select.style.display="block";
}
const order=()=>{
    
    let name=document.querySelector('#name').value;
    let mobile=document.querySelector('#mobile').value;
    let email=document.querySelector('#email').value;
    let img=document.querySelector('#img').value;
    let status=document.querySelector('#status').value;
    
  

    let customerdata={
       "name":name,
       "mobile":mobile,
       "email":email,
       "img":img,
       "status":status
        }
     console.log(customerdata);
    // window.alert(customerdata);

    let url = 'https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customer';
    let method= {
        method:"POST",
        header:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(customerdata)
    }
    fetch(url,method);
}


( async function(){
    let data = await fetch('https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customer');
    let response = await data.json();

    let ot = document.querySelector('#showdata');
    ot.innerHTML = response.map(e=>`
        <tr>
          <td>${e.name}</td>
          <td>${e.mobile}</td>
          <td>${e.email}</td>
          <td><img width="100px" src="${e.img}"></td>
          <td>${e.status}</td>
          
        </tr>
        `).join("");

        console.log(response)
})()