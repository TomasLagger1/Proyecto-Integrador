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
                    <div class="messi"><img class="imgproductos" src="${stock.image}" alt="foto producto carrito"></div>
                    <div class="descripción">${stock.title}</div>
                    </div>
                        `;
                        agreg.innerHTML = carroo;
                    }
                )
                .catch (function(err){
                    console.log(err);
                })

                var button = document.getElementById('botoncarro');

                button.addEventListener('click', function() {
                    alert('Gracias por tu compra');
                });