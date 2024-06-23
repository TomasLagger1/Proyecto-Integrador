console.log(location.search);

let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let category = queryStringObj.get("category")

console.log(category);
            
            let producctt = document.querySelector(".contenedoresIndexuno")
            let especifico="";
         
            fetch (`https://fakestoreapi.com/products/category/`+category)
                .then (function(response){
                    return response.json();
                })
         
                .then (function(data){
                    console.log(data);
especifico = `<section class= "contenedoresIndexuno">`
                    
                     for (let i=0; i<data.length; i++){
                        let stock = data [i];
                        console.log(stock);
                        console.log(stock.title);
                        console.log(stock.image);
                        console.log(stock.description);
                       

                        especifico=especifico+`<article class="productosIndex">
                        <h3 class="pipipi">${stock.title}</h3>
                        <div> <img class="imgIndex" src="${stock.image}" alt="${stock.title}"></div>
                        <div>
                            <ul class="listasIndex">
                                <li class = "descindex">Descripcion: ${stock.description}</li>
                            </ul>
                        </div>
                        </article>
                        `;
                    }
                    
                        especifico=especifico+ `</section>`
                        producctt.innerHTML = especifico;
                    }
                )
                .catch (function(err){
                    console.log(err);
                })