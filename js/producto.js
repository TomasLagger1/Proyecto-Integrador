            let hombress = document.querySelector(".productojsmessi")
            let item="";
         
            fetch('https://fakestoreapi.com/products')
                .then (function(response){
                    return response.json()
                })
         
                .then (function(data){
                    console.log(data);
                    for (let i=0; i<data.length; i++){
                        let stock= data [i];
                        item=`
                        <div>
                        <p class="ppproducto">${stock.title}</p>
                        </div>
                        <div class="sillon"><img class="tenedor" src="${stock.image}" alt="imagen producto"></div>
                        <div class="mesa"> 
                        <ul class="xd">
                        <li class="lanzini">Categoria: Mujeres</li>
                        <li class="lanzini">
                        $${stock.price}
                        </li> 
                        <li class="lanzini">${stock.description}</li>
                        </ul>
                        </div>
                        <div class="fonseca">
                        <button class="botonProducto" type="submit"> <a href="./cart.html">Agregar al carrito</a> </button>
                        </div>
                        `
                        hombress.innerHTML += item;
                    }
                })
                .catch (function(err){
                    console.log(err);
                })