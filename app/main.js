import BackgroundsController from "./Controllers/BackgroundsController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TimesController from "./Controllers/TimesController.js";
import WeatherController from "./Controllers/WeatherController.js";
import ListsController from "./Controllers/ListsController.js"
import TasksController from "./Controllers/TasksController.js"

class App {
  backgroundsController = new BackgroundsController();
  quotesController = new QuotesController();
  weatherController = new WeatherController();
  timesController = new TimesController();
  listsController = new ListsController();
  tasksController = new TasksController();

}

window["app"] = new App();




