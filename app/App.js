import { ValuesController } from "./Controllers/ValuesController.js";
import { JotsController } from "./Controllers/JotsController.js";

class App {
    JotsController = new JotsController()
}

window["app"] = new App();
