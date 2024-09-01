const addproduct=()=>{
    let select=document.querySelector('.form');
    select.style.display="block";
}
const order = async () => {
    console.log("order function called");
  
    const name = document.querySelector("#name").value.trim();
    const mobile = document.querySelector("#mobile").value.trim();
    const email = document.querySelector("#email").value.trim();
    const img = document.querySelector("#img").value.trim();
    const status = document.querySelector("#status").value.trim();
  
    if (!name || !mobile || !email || !img || !status) {
      alert("Please fill in all fields.");
      return;
    }
  
    const customerData = {
      name,
      mobile,
      email,
      img,
      status,
    };
  
    alert("Customer data: " + JSON.stringify(customerData));
    // alert(customerData);
  
    let method = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    };
  
    const url = "https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customer";
    fetch(url, method);
  
    try {
      
    } catch (error) {
      
    }
  };


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