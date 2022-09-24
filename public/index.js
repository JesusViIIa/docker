const list = document.getElementById("product-list");
const form = document.getElementById("form");



  
form.addEventListener("submit", async (event) => {
    console.log('test')
  event.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
 const body = {name, description, price}
  const res = await fetch("/api", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  });


  const product = await res.json();
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = ` ${product.name}:  <small>${product.description}</small> <strong>${product.price}</strong> `;
  const btnDelete = document.createElement('button')
  btnDelete.className='delete btn btn-danger'
  btnDelete.innerText= 'Delete'
  btnDelete.id =product._id 
  li.append(btnDelete)
  btnDelete.addEventListener('click',async ()=>{
    const res = await fetch("/api/"+ btnDelete.id, {
      method: "Delete",
    });
    if(res.ok){ 
      getProducts()
      location.reload()
    }

  })

  location.reload()
  document.getElementById("name").value = ''
document.getElementById("description").value = ''
document.getElementById("price").value = ''
});

const getProducts = async () => {
  const res = await fetch("/api");
  const data = await res.json();

  data.forEach((product) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = ` ${product.name}:  <small>${product.description}</small> <strong>${product.price}</strong> `;
    const btnDelete = document.createElement('button')
    btnDelete.className='delete btn btn-danger'
    btnDelete.innerText= 'Delete'
    btnDelete.id =product._id 
    li.append(btnDelete)
    btnDelete.addEventListener('click',async ()=>{
      const res = await fetch("/api/"+ btnDelete.id, {
        method: "Delete",
      });
      if(res.ok){ 
        getProducts()
        location.reload()
      }
  
    })


    list.appendChild(li);
  });
};

getProducts();
