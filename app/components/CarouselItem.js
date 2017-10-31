import Marionette from "backbone.marionette";
import template from "../templates/carouselItem.jst";
import "../styles/carouselItem.css";

export default Marionette.View.extend({
  template: template,
  loaded: function() {
    const imagesLength = this.model.get("images").length;

    const getRandomIndex = () => Math.floor(Math.random() * imagesLength);

    this.model.set("randomImage", this.model.get("images")[getRandomIndex()]);
    this.render();
    setInterval(() => {
      this.model.set("randomImage", this.model.get("images")[getRandomIndex()]);
      this.render();
    }, 2500);
  },
  className: "carouselItem"
});
