let idLocal = localStorage.getItem('cart');
let idjason = JSON.parse(idLocal);

if (idLocal == null) {
    let texto = document.querySelector("h5");
    texto.innerHTML = "Su carrito está vacío";
} else {
    let carti = document.querySelector(".centu")
    let carroo = ''

  idjason.forEach(id => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let stock = data;
                carroo += `
                    <div>
                        <div class="messi"><img class="imgproductos" src="${stock.image}" alt="foto producto carrito"></div>
                        <div class="descripción">${stock.title}</div>
                    </div>
                `;
                carti.innerHTML = carroo;
                    })
                .catch (function(err){
                    console.log(err);
                })

    })

}

var button = document.getElementById('botoncarro');

button.addEventListener('click', function() {
    alert('Gracias por tu compra');
    localStorage.clear();

})


console.log(idLocal) //si la respuesta de este es null, el h5 deberia poner que esta vacio y sino deberia quedar como estaba