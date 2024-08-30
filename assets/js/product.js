function addproduct(){
    const name=document.querySelector("#name").value;
    const price=document.querySelector("#price").value;
    const payment=document.querySelector("#payment").value;
    const status=document.querySelector("#status").value;

    let product_data={
        "product_name":name,
        "product_price":price,
        "payment":payment,
        "status":status
         }
         const url="https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/product";
         let method= {
             method:"POST",
             header:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify(product_data)
         }
         fetch(url,method)


}

function showform(){
    let form=document.querySelector("#productform");
    form.style.display="block";
}
(async function() {
    let data = await fetch('https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/product');
    let response = await data.json();

    let ot = document.querySelector('#showtable');
    ot.innerHTML = response.map(e=>`
        <tr>
          <td>${e.product_name}</td>
          <td>${e.product_price}</td>
          <td>${e.payment}</td>
          <td>${e.status}</td>
          
        </tr>
        `).join("");

        console.log(response)
})()