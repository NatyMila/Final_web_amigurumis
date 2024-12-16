document.addEventListener("DOMContentLoaded", () => {
    const botonesComprar = document.querySelectorAll(".btn-comprar");
    console.log(botonesComprar);
    

    botonesComprar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();

            const codigo = boton.getAttribute("data-codigo");
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            console.log(codigo);
            console.log(precio);

            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            console.log(carrito);
            
            carrito.push({ codigo, nombre, precio });

            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`Agregaste al carrito: ${nombre} - Cód.${codigo}.`);


        });
    });
});

let contador = 0;

const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(function (btn) {
  btn.addEventListener('click', function (i) {
    i.preventDefault(); 

    contador++;

    document.getElementById('contador-productos').textContent = contador;
  });
});

