setInterval(getRates,10000)


function getRates(){
  $.getJSON('http://data.fixer.io/api/latest?access_key=d5062fe35bfcd2277d29b6dc3462262d&symbols=USD&format=1', function(response){
    if(response.success){
      console.log(response)
      $('#result').text('1 EUR : '+ response.rates.USD + ' USD')

    } else {
      $('#result').html(`
                        <div>API bir hata ile karsilasti. 30 sn bekleyin ya da tekrar istek gondermek icin butona tiklayin.
                          <div class='error-info' >Hata detaylari : ${response.error.info}</div>
                          <button id=resend>tekrar dene</button>
                        </div>`)
                        
    }
   
  })
}

getRates()