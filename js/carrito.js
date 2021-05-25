// const lista = document.getElementById("lista-productos");

// lista.addEventListener("click", (e) => {
//   if (e.target.classList.contains("agregar-carrito")) {
//     capturaDatos();
//   }
// });

window.onload = lista();
window.onload = listaProductos();

function lista() {
  if (!localStorage.getItem("productos")) {
    let productos = [
      {
        id: 1,
        name: "Feroz",
        image: "/img/gomitas1.png",
        precio: 10000,
      },
      {
        id: 2,
        name: "Gusanos",
        image: "/img/gomitas2.png",
        precio: 12000,
      },
      {
        id: 3,
        name: "Unicornios",
        image: "/img/gomitas3.png",
        precio: 13000,
      },
      {
        id: 4,
        name: "Ositos",
        image: "/img/gomitas4.png",
        precio: 15000,
      },
    ];
    localStorage.setItem("productos", JSON.stringify(productos));
    //localStorage.setItem('nombregoma', productos[1].name);
  }
}

function listaProductos() {
  let productos = JSON.parse(localStorage.getItem("productos"));
  let listaProductos = document.querySelector('#lista-productos');
  let html = '';
  productos.forEach((element) => {
    html += `<ul>
        <li>
            <h1>${element.name}</h1>
            <img src="${element.image}" alt="">
            <h2 class="precio">${element.precio}</h2>
            <input type="button" class="agregar-carrito" value="Comprar">
        </li>       
</section>`
  });
  listaProductos.innerHTML = html;
}
