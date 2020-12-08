import Model from "./model.js";
import View from "./view.js";

export default class Controller{

    listeners = {
       // getCity: this.getCity(this.view.url).bind(this)
    };

    constructor(){
        this.view = new View(this.getCity);
        this.model = new Model();

    }


    getCity = () => {
        this.model.getCity(this.view.url).then(() => {
            const city = this.model.getLastCity();

            this.view.renderCity(city);

        }).catch(() => {
          this.view.showNameError();
        });
    }

}