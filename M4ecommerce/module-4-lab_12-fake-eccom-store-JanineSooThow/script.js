
let APIdata = []

//The fetch() requires only one parameter which is the URL of the resource you want to fetch. Fetch (URL) is a promise that fetches data from an API. 
fetch('https://fakestoreapi.com/products')  //one way to fetch API is by passing fetch () the UROL of the API as a parameter/testing API then use node script.js in terminal 
        .then((response) => response.json()) //the response parameter is the result of the Promise after it's been fulfilled
        .then((json) => {   
            console.log(json)
            APIdata = json
            showCards()
          })

.catch((error) => console.log(error)); //or .catch(error => {}); handles the error 

const showCards = ()=>{
  let parentDiv = document.getElementById('parentDiv') 

  //the forEach method is an iterator (goes through each item). Allows one to run a function for every element of the array
  APIdata.forEach((products)=>{    
    let template = document.getElementById('card-template').content.cloneNode(true)
    template.querySelector('.card-title').innerText = products.title;
    template.querySelector('.card-text').innerText = products.description;
    template.querySelector('.card-img-top').src = products.image;
    template.querySelector('.card-price').innerText = '$' + products.price; //concatenating $ with product price
  
    parentDiv.appendChild(template)

});

}



       