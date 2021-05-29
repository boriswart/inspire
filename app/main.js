import BackgroundsController from "./Controllers/BackgroundsController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  backgroundsController = new BackgroundsController();
  quotesController = new QuotesController();
  weatherController = new WeatherController();
}

window["app"] = new App();


