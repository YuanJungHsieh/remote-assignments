function ajax(src, callback) {
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
  for (let i = 0; i < data.length; i++) {
    const para = document.createElement("p");
    para.innerHTML = `
    <div>
    <h3>Product: ${data[i].name}</h3>
    <p>Price: ${data[i].price}</p>
    <p>Description: ${data[i].description}</p>
    <div>
    `;
    document.getElementById("mydiv").appendChild(para);
  }
}
ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
);
