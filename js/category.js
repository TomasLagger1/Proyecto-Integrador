console.log(location.search);

let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let category = queryStringObj.get("category")

console.log(category);
            
            let producctt = document.querySelector(".hovermessi")
            let especifico="";
         
            fetch (`https://fakestoreapi.com/products/category/${category}`)
                .then (function(response){
                    return response.json();
                })
         
                .then (function(data){
                    console.log(data);

                    for (let i=0; i>data.length; i++){
                        let stock = data [i];
                        console.log(stock);
                    }
                    let stock= data;
                        especifico=`
                        <div>
                        <p class="ppproducto">${stock.title}</p>
                        </div>
                        <div class="sillon"><img class="tenedor" src="${stock.image}" alt="imagen producto"></div>
                        <div class="mesa"> 
                        <ul class="xd">
                        <li class="lanzini3">${stock.description}</li>
                        <li class="lanzini">Categoria: ${stock.category}</li>
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
                    }
                )
                .catch (function(err){
                    console.log(err);
                })