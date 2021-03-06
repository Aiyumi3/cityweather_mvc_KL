export default class Model{

    cities = [];

    getCity(inputCity){

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=65fadf9c874327f520bf18defed24255&units=metric`;
        return fetch(url)
            .then(response =>response.json())
            .then(data => {
                const { main, name, sys, weather, coord, wind } = data;


                const city = {

                    weather : weather[0]["description"],
                    tempMain : main["temp"],
                    tempMin : main["temp_min"],
                    tempMax : main["temp_max"],
                    humidity : main["humidity"],
                    windSpeed : wind["speed"],
                    coordLon : coord["lon"],
                    coordLat : coord["lat"],
                    name : name,
                    country: sys["country"],
                    icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                        weather[0]["icon"]
                    }.svg`
                };

                this.cities.push(city);
            });
    }

    getLastCity(){
        return this.cities[this.cities.length - 1];
    }

}