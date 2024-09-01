async function addProduct() {
    console.log("addProduct function called");
    const name = document.querySelector("#name").value.trim();
    const price = document.querySelector("#price").value.trim();
    const payment = document.querySelector("#payment").value.trim();
    const status = document.querySelector("#status").value.trim();
  
    if (!name || !price || !payment || !status) {
      alert("Please fill in all fields.");
      return;
    }
  
    const productData = {
        product_name:name,
        product_price:price,
      payment,
      status,
    };
  
    // alert("Product data: " + JSON.stringify(productData)); // Display productData in alert box
  
    let method = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    };
  
    const url = "https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/product"; // Replace with your API endpoint URL
  fetch(url, method); 
    try {
     
      alert("Product added successfully!");
    } catch (error) {
    }
  }


  
function showform(){
    let form=document.querySelector("#productform");
    form.style.display="block";
}
async function showData() {
  let data = await fetch('https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/product');
  let response = await data.json();

  let ot = document.querySelector('tbody');
  ot.innerHTML = response.map(e=>`
      <tr>
        <td>${e.product_name}</td>
        <td>${e.product_price}</td>
        <td>${e.payment}</td>
        <td>${e.status}</td>
      </tr>
      `).join("");

  console.log(response)
}

showData();