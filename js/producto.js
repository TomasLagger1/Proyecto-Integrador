console.log(location.search);

let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let id = queryStringObj.get("id")

console.log(id);

function agregAlCar(idproducto) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(idproducto);
        localStorage.setItem('cart', JSON.stringify(cart));
}
            
            let producctt = document.querySelector(".productojsmessi")
            let especifico="";
         
            fetch (`https://fakestoreapi.com/products/${id}`)
                .then (function(response){
                    return response.json()
                })
         
                .then (function(data){
                    console.log(data);
                    let stock = data;
                        especifico=`
                        <div>
                        <p class="ppproducto">${stock.title}</p>
                        </div>
                        <div class="sillon"><img class="tenedor" src="${stock.image}" alt="imagen producto"></div>
                        <div class="mesa"> 
                        <ul class="xd">
                        <li class="lanzini3">${stock.description}</li>
                        <a href="./category.html?category=${stock.category}"><li class="lanzini">Categoria: ${stock.category}</li></a>
                        <li class="lanzini2">
                        PRECIO: $${stock.price}
                        </li> 
                        </ul>
                        </div>
                        <div class="fonseca">
                        <button class="botonProducto" type="submit"> <a href="./cart.html?id=${stock.id}">Agregar al carrito</a> </button>
                        </div>
                        `;
                        producctt.innerHTML = especifico;

                        let bot = document.querySelector(".botonProducto")
                        console.log(bot)
                        bot.addEventListener('click', function() {
                            alert('Agregado al carrito');
                            agregAlCar(stock.id);
                        });            

                    }
                )
                .catch (function(err){
                    console.log(err);
                })

