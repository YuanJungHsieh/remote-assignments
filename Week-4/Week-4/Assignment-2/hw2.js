function ajax(src, callback) {
  // your code here
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  const section = document.createElement("section");
  productList.appendChild(section);
  console.log(data);
  data.map((product) => {
    section.innerHTML += `
    <h2>name:${product.name}</h2>
    <p>price:${product.price}</p>
    <p>descripttion:${product.description}</p>
    `;
  });
}
ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
