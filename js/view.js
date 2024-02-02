export default class View{

    btn = document.querySelector("#search");
    input = document.querySelector("#inp-name");
    msg = document.querySelector(".text-danger");

    constructor( {getCity}){
        this.btn.addEventListener('click',
            getCity
        );
    }

    renderCity = ({ weather ,tempMain , tempMin ,tempMax , humidity , windSpeed , coordLon , coordLat ,name ,country, icon } ) => {
        const weatherHtml = `
            <div class="card mb-4" style="border-radius: 17px; margin: 15px;">
               <div class="row no-gutters">
                
                  <div class="col-8 col-xl-7">
                    <div class="float-left">
                      <img src="${icon}" class="card-img" alt="weather" style="margin: 7px">
                      </div>
                      </div> <div class="card-body">
                         <p class="card-text" ><span style="color: #54315c;font-size:15pt;font-weight: 400; 
                         padding-left: 10px; text-align: center">   ${weather}</span></p>
                         <p class="card-text"><span style="font-size:20pt;font-weight: 700;">${Math.round(tempMain)}<sup style="background-color: #ffe4c4;
                         border-radius: 10px">°C</sup></span><br> min: ${Math.round(tempMin)}<sup style="background-color: bisque;
                         border-radius: 10px">°C</sup>,
                          max: ${Math.round(tempMax)}<sup style="background-color: bisque;
                         border-radius: 10px">°C</sup><br>
                          humidity 💧: ${humidity}  %<br>
                          wind speed: ${windSpeed} m/s
                         <br> <small class="text-muted">coords: ${coordLon}, ${coordLat}</small>
                         </p>
                         <h5 class="card-title"> ${name}, <span style="background-color: #efd0f7;
                         border-radius: 11px">${country}</span></h5>
                      </div>
               </div>
            </div>
            `;
        const contWeather = document.querySelector('.container #weather-container');
        contWeather.innerHTML = weatherHtml;
    }
    getInp() {
        const answ = {
            name : this.input.value
        };
        this.input.value = '';
        this.msg.innerHTML = '';
        this.input.focus();
        return answ;
    }


    showNameError(){
        this.msg.innerHTML = 'enter a valid city!!!';
        this.input.value = '';
        this.input.focus();
    }
}
