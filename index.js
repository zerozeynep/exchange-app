setInterval(getRates,30000)

let latestValues = []

function getRates(){
  $.getJSON('http://data.fixer.io/api/latest?access_key=d5062fe35bfcd2277d29b6dc3462262d&symbols=USD&format=1', (response)=>{
    if(response.success){
      $('#result').text('1 EUR : '+ response.rates.USD + ' USD')
      latestValues.push(response.rates.USD)

      if(latestValues.length>1){
        latestValues.shift()
        latestValues[1] > response.rates.USD ? 
        $('#result').addClass('decrease') 
        : 
        latestValues[1] < response.rates.USD? $('#result').addClass('increase') 
        :
        $('#result').addClass('constant')

      }


    } else {
      $('#result').html(`
                        <div>API bir hata ile karsilasti. 30 sn bekleyin ya da tekrar istek gondermek icin butona tiklayin.
                          <div class='error-info' >Hata detaylari : ${response.error.info}</div>
                          <button id=resend>tekrar dene</button>
                        </div>`)
      $('#result').on('click','#resend', ()=>location.reload())
      

    }
   
  })
}

getRates()