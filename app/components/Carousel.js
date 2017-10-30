import Marionette from "backbone.marionette";
import template from "../templates/carousel.jst";
import CarouselItemContainer from "./CarouselItemContainer";
import CarouselCollection from "../model/Carousel.collection";
import "../styles/carousel.css";

export default Marionette.View.extend({
  template: template,
  regions: {
    carouselItemContainer: "#carouselItemContainer"
  },
  ui: {
    arrowLeft: "#arrow-left",
    arrowRight: "#arrow-right"
  },
  events: {
    "click @ui.arrowLeft": "moveLeft",
    "click @ui.arrowRight": "moveRight"
  },
  length: 0,
  onRender: function() {
    let carouselCollection = new CarouselCollection();
    this.showChildView("carouselItemContainer", new CarouselItemContainer({ collection: carouselCollection }));
    let self = this;
    carouselCollection.fetch({
      dataType: "text",
      success: function() {
        self.getChildView("carouselItemContainer").loaded();
        if (self.getChildView("carouselItemContainer").children.length > 4) {
          self.getUI("arrowRight").removeAttr("disabled");
        }
      }
    });
  },
  calculateArrowsStatus: function() {
    if (this.getChildView("carouselItemContainer").rightStop) {
      this.getUI("arrowRight").attr("disabled", "disabled");
    } else {
      this.getUI("arrowRight").removeAttr("disabled");
    }
    if (this.getChildView("carouselItemContainer").leftStop) {
      this.getUI("arrowLeft").attr("disabled", "disabled");
    } else {
      this.getUI("arrowLeft").removeAttr("disabled");
    }
  },
  moveLeft: function() {
    this.getChildView("carouselItemContainer").left();
    this.calculateArrowsStatus();
  },
  moveRight: function() {
    this.getChildView("carouselItemContainer").right();
    this.calculateArrowsStatus();
  }
});
