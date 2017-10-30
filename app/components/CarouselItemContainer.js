import Marionette from "backbone.marionette";
import CarouselItem from "./CarouselItem";

export default Marionette.CollectionView.extend({
  className: "carouselItemContainer",
  childView: CarouselItem,
  loaded: function() {
    for (let i = 0; i < this.children.length; i++) {
      this.children.findByIndex(i).loaded();
    }
  },
  rightStop: false,
  leftStop: true,
  left: function() {
    if (this.leftStop) {
      return;
    }
    this.rightStop = false;
    const currentPosition = parseFloat(this.$el.css("left"));
    const width = 150;
    const size = 4;
    const step = width * size;

    const maxOffset = 0;
    const offset = Math.max(-currentPosition - step, maxOffset);
    this.$el.css("left", -offset + "px");
    if (offset === maxOffset) {
      this.leftStop = true;
    }
  },
  right: function() {
    if (this.rightStop) {
      return;
    }
    this.leftStop = false;
    const currentPosition = parseFloat(this.$el.css("left"));
    const length = this.children.length;
    const width = 150;
    const size = 4;
    const step = width * size;

    const maxOffset = width * length - step;
    const offset = Math.min(-currentPosition + step, maxOffset);
    this.$el.css("left", -offset + "px");
    if (offset === maxOffset) {
      this.rightStop = true;
    }
  }
});
