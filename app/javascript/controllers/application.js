import { Application } from "../stimulus.js"
import HelloController from './hello_controller.js'
const application = Application.start()

// To register controllers, you will do it here:
// import { Controller } from "@hotwired/stimulus"
// application.register("name", Controller)

application.register("hello", HelloController)

export { application }