import Marionette from "backbone.marionette";
import Carousel from "./Carousel";

export default Marionette.Application.extend({
  region: "#app",

  onStart() {
    this.showView(new Carousel());
  }
});
