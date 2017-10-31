import Bb from "backbone";
import CarouselItemModel from "./CarouselItem.model";

export default Bb.Collection.extend({
  model: CarouselItemModel,
  url: "carousel.json",
  parse: response => JSON.parse(response)
});
