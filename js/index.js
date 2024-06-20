// let testeo1 = "hola"

// console.log(testeo1)


// INDEX HOMBRES SECTION

   let hombress= document.querySelector(".contenedoresIndexuno")
   let item="";

   fetch('https://fakestoreapi.com/products/category/men\'s clothing')
       .then (function(response){
           return response.json()
       })

       .then (function(data){
           console.log(data);
           for (let i=0; i<data.length; i++){
               let stock= data [i];
               item=`
               <article class="productosIndex">
               <div>
               <h3 class="pipipi">${stock.title}</h3>
               <img class="imgIndex" src="${stock.image}">
               <ul class="listasIndex">
               <li class="precioIndexJs">$${stock.price}</li>
               </ul>
               </div>
                <div>
                  <button class="botonIndex" type="submit"> <a href="./cart.html">Agregar al carrito</a> </button>
               </div>
               <div>
                  <button class="botonIndex" type="submit"> <a href="./producto.html?id=${stock.id}">Ver más</a> </button>
               </div>
               </section>
               </article>
               `
               hombress.innerHTML += item;
           }
       })
       .catch (function(err){
           console.log(err);
       })



// INDEX MUJERES SECTION

       let muujeres= document.querySelector(".contenedoresIndexdos")
       let itemm="";
    
       fetch('https://fakestoreapi.com/products/category/women\'s clothing')
           .then (function(response){
               return response.json()
           })
    
           .then (function(data){
               console.log(data);
               for (let i=0; i<data.length; i++){
                   let stock= data [i];
                   itemm=`
                   <article class="productosIndex">
                   <div>
                   <h3 class="pipipi">${stock.title}</h3>
                   <img class="imgIndex" src="${stock.image}">
                   <ul class="listasIndex">
                   <li class="precioIndexJs">$${stock.price}</li>
                   </ul>
                   </div>
                    <div>
                      <button class="botonIndex" type="submit"> <a href="./cart.html">Agregar al carrito</a> </button>
                   </div>
                   <div>
                      <button class="botonIndex" type="submit"> <a href="./producto.html?id=${stock.id}">Ver más</a> </button>
                   </div>
                   </section>
                   </article>
                   `
                   muujeres.innerHTML += itemm;
               }
           })
           .catch (function(err){
               console.log(err);
    })



// INDEX JEWERLY SECTION

let joyas= document.querySelector(".contenedoresIndextres")
let itemmm="";

fetch('https://fakestoreapi.com/products/category/jewelery')
    .then (function(response){
        return response.json()
    })

    .then (function(data){
        console.log(data);
        for (let i=0; i<data.length; i++){
            let stock= data [i];
            itemmm=`
            <article class="productosIndex">
            <div>
            <h3 class="pipipi">${stock.title}</h3>
            <img class="imgIndex" src="${stock.image}">
            <ul class="listasIndex">
            <li class="precioIndexJs">$${stock.price}</li>
            </ul>
            </div>
             <div>
               <button class="botonIndex" type="submit"> <a href="./cart.html"> Agregar al carrito</a> </button>
            </div>
            <div>
               <button onclick="agregarAlCarrito(${stock.id})" class="botonIndex" type="submit"> <a href="./producto.html?id=${stock.id}">Ver más</a> </button>
            </div>
            </article>
            `
            joyas.innerHTML += itemmm;
        }
    })
    .catch (function(err){
        console.log(err);
    })

    function agregarAlCarrito(productoId) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(productoId);
        localStorage.setItem('cart', JSON.stringify(cart));
    }