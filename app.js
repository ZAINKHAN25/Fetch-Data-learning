var fetchapivariable = fetch('https://fakestoreapi.com/products');
var body = document.querySelector('.body');
var emptyarray = [];

fetchapivariable.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    emptyarray.push(...data);
    emptyarray.forEach(element => {
        console.log(element);
        body.innerHTML += `<div class="card" style="border: 1px solid black; width: 250px; padding: 10px; margin: 0px 10px; text-align: justify;">
            <img width="250px" src="${element.image}" height="300px" alt="Nahi Mila">
            <h3>${element.title}</h3>
            <p>${element.description}</p>
            <input type="button" value="Buy here" style="margin-left: 20px; width: 80%; color: white; border-radius: 3px; background-color: #0d6efd; border: none; padding: 5px;">
        </div>`;
    });
});
