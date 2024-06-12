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
               <h3>${stock.title}</h3>
               <img class="imgIndex" src="${stock.image}">
               <ul class="listasIndex">
               <li>${stock.description}</li>
               <li>$${stock.price}</li>
               </ul>
               <section class="botonIndex">
               <a href="./producto.html?id=${stock.id}">VER MAS</a>
               </section>
               `
               hombress.innerHTML += item;
           }
       })
       .catch (function(err){
           console.log(err);
       })