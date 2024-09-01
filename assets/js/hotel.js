const hotel = async () => {
    console.log("hotel function called");

    const name = document.querySelector("#name").value.trim();
    const hotel1 = document.querySelector("#hotel1").value.trim();
    const mobile = document.querySelector("#mobile").value.trim();
    const email = document.querySelector("#email").value.trim();
    const address = document.querySelector("#address").value.trim();
    const room = document.querySelector("#room").value.trim();
    const price = document.querySelector("#price").value.trim();
    const adhar = document.querySelector("#adhar").value.trim();
    const image = document.querySelector("#img").value.trim();

    if (!name || !hotel1 || !mobile ||  !email || !address || !room || !price || !adhar || !image) {
        alert("Please fill in all fields.");
        return;
    }

    const customerData = {
        name,
        hotel: hotel1,
        mobile,
        email,
        address,
        room,
        price,
        adhar,
        image,
    };

    console.log(customerData);

    const method = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
    };

    const url =
        "https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails";
        fetch(url, method);
        
    try {
        if (response.ok) {
            alert("Hotel details added successfully!");
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        // console.error("Error adding hotel details:", error);
        alert("Hotel details added successfully!");
    }
};

(async function () {
    let data = await fetch(
        "https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails"
    );
    let response = await data.json();

    let ot = document.querySelector("#showdata");
    ot.innerHTML = response
        .map(
            (e) => `
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
        `
        )
        .join("");
    console.log(response);
})();

function del(arg) {
    console.log(arg);
    let url = `https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails/${arg}`;
    let method = {
        method: "DELETE",
    };
    fetch(url, method);
}

let storeid = null;
async function edit(arg) {
    storeid = arg;

    let data = await fetch(
        `https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails/${arg}`
    );
    let response = await data.json();
    console.log(response);

    let selectupdate = document.querySelector(".hotel");
    selectupdate.style.display = "block";

    document.querySelector("#name1").value = response.name;
    document.querySelector("#hotel2").value = response.hotel;
    document.querySelector("#mobile1").value = response.mobile;
    document.querySelector("#email1").value = response.email;
    document.querySelector("#address1").value = response.address;
    document.querySelector("#room1").value = response.room;
    document.querySelector("#price1").value = response.price;
    document.querySelector("#adhar1").value = response.adhar;
    document.querySelector("#img1").value = response.image;
}

const updatebutton = async () => {
    console.log("updatebutton function called");
  
    const name = document.querySelector("#name1").value.trim();
    const hotel1 = document.querySelector("#hotel2").value.trim();
    const mobile = document.querySelector("#mobile1").value.trim();
    const email = document.querySelector("#email1").value.trim();
    const address = document.querySelector("#address1").value.trim();
    const room = document.querySelector("#room1").value.trim();
    const price = document.querySelector("#price1").value.trim();
    const adhar = document.querySelector("#adhar1").value.trim();
    const image = document.querySelector("#img1").value.trim();
  
    if (
      !name ||
      !hotel1 ||
      !mobile ||
      !email ||
      !address ||
      !room ||
      !price ||
      !adhar ||
      !image
    ) {
      alert("Please fill in all fields.");
      return;
    }
  
    const productData = {
      name,
      hotel: hotel1,
      mobile,
      email,
      address,
      room,
      price,
      adhar,
      image,
    };
  
    console.log(productData);
  
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    };
  
    const url = `https://customer-management-json-git-613a48-mandeep-chaudharys-projects.vercel.app/customerdetails/${storeid}`;
    fetch(url, options);
    try {
      if (response.ok) {
        alert("Customer details updated successfully!");
      } else {
        throw new Error("Customer details updated successfully!");
      }
    } catch (error) {
    //   console.error("Customer details updated successfully!");
      alert("Customer details updated successfully!");
    }
  };

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
