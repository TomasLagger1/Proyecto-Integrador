    let idLocal = localStorage.getItem('cart');
    let idjason = JSON.parse(idLocal);

    if (idLocal == null) {
        let texto = document.querySelector("h5");
        texto.innerHTML = "Su carrito está vacío";
    } else {
        let carti = document.querySelector (".centu")
        let carroo = ''

        for (let i=0; i<idjason.length; i++){
            fetch(`https://fakestoreapi.com/products/${idjason[i]}`)
                .then (function(response){
                return response.json()
            })  
            .then (function (stock){
                console.log(stock);
                carroo+= `
                        <div>
                            <div class="sprite"><img class="imagencarrocool" src="${stock.image}" alt="foto producto carrito"></div>
                            <div class="spritecero">${stock.title}</div>
                        </div>
                    `;
                    carti.innerHTML = carroo;
                        })
                    .catch (function(err){
                        console.log(err);
                    })

        }
    }
    
    var button = document.getElementById('botoncarro');

    button.addEventListener('click', function() {
        alert('Gracias por tu compra');
        localStorage.removeItem('cart');

    })


    console.log(idLocal) //si la respuesta de este es null, el h5 deberia poner que esta vacio y sino deberia quedar como estaba