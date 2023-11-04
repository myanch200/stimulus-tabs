import { Controller } from "../stimulus.js"

// Define the controller class
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}