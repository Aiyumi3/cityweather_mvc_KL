import Model from "./model.js";
import View from "./view.js";

export default class Controller{

    listener = {
        getCity: this.getCity.bind(this)
    };

    constructor(){
        this.view = new View(this.listener);
        this.model = new Model();

    }
    getCity(){
        this.model.getCity(this.view.input.value).then(() => {
            const city = this.model.getLastCity();

            this.view.renderCity(city);
            this.view.getInp();

        }).catch(() => {
            this.view.showNameError();
        });
    }

}
