            let agreg = document.querySelector(".centu")
            let carroo="";
         
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

         
                .then (function(data){
                    console.log(data);
                    let stock= data;
                        carroo=`
                    <div>
                    <div class="messi"><img class="imgproductos" src="${1}" alt="foto producto carrito"></div>
                    <div class="descripción">${1}</div>
                    </div>
                        `;
                        agreg.innerHTML = carroo;
                    }
                )
                .catch (function(err){
                    console.log(err);
                })