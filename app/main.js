import BackgroundsController from "./Controllers/BackgroundsController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TimesController from "./Controllers/TimesController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  backgroundsController = new BackgroundsController();
  quotesController = new QuotesController();
  weatherController = new WeatherController();
  timesController = new TimesController();
}

window["app"] = new App();




