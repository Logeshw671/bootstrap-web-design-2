var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML= `<div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
        <div class="card">
        <img src="${data1[i].flag}" class="card-img-top" alt="...">
        <div class="card body">
          <h5 class="card-title">card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a nat
          </div>
          </div>
        </div>
      </div>`

        document.body.append(div);
    }
});