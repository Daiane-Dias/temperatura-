/* 
 *Função em javascript
 */

function getUserPosition(){
    
    let url;
    navigator.geolocation.getCurrentPosition((pos)=>{
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        url='https://api.openweathermap.org/data/.2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=b24c5c1c72650d033e8f62f6d0ddb8b9';
        fetchApi(url);
        
    });
}

function fetchApi(url){
    let city = document.querySelector('.city');
    let temp = document.querySelector('span');
    fetch(url)
     .then((data)=>{
         return data.json();
 
     })
      .then((data)=>{
          let tempInCelsius = ((5/9)*(data.main.temp32)).toFixed(1);
          city.innerText = 'Hoje a temperatura em ${data.name} e:�C';
          temp.innerText = tempInCelsius;
      })
          .catch((err)=>{
             city.innerText='Impossivel acessar a temperatura.Verifique sua conexão.';
            temp.innerText='-';
      })
}
getUserPosition();

fuction mapReceita(rec){
    
}