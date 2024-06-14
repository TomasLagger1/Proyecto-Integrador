console.log(location.search);

let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let id = queryStringObj.get("id")

console.log(id);
            
            let agreg = document.querySelector(".taiofrers")
            let carroo="";
         
            fetch (`https://fakestoreapi.com/products/${id}`)
                .then (function(response){
                    return response.json()
                })
         
                .then (function(data){
                    console.log(data);
                    let stock= data;
                        carroo=`
                    <div>
                    <div class="messi"><img class="imgproductos" src="${stock.image}" alt="foto producto carrito"></div>
                    <div class="descripción">${stock.description}</div>
                    </div>
                        `;
                        agreg.innerHTML = carroo;
                    }
                )
                .catch (function(err){
                    console.log(err);
                })