
document.getElementById("actualitzar").addEventListener("click",function(){


    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("bitcoin").innerHTML=data.bpi.EUR.rate+" €"
  });

  
})


document.getElementById("novaBroma").addEventListener("click",function(){


    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML=data.value
  });

  
})

document.getElementById("nouUsuari").addEventListener("click", function(){

fetch('https://randomuser.me/api')
.then(resp => resp.json())
.then(datos => {console.log(datos)
document.getElementById("nomUsuari").innerHTML=datos.results[0].name.first
document.getElementById("cognomUsuari").innerHTML=datos.results[0].name.last
document.getElementById("imatge").src=datos.results[0].picture.thumbnail

});

})