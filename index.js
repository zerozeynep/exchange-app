setInterval(getRates,10000)


function getRates(){
  $.getJSON('http://data.fixer.io/api/latest?access_key=d5062fe35bfcd2277d29b6dc3462262d&symbols=USD&format=1', function(response){
    console.log(response)
  })
}

getRates()