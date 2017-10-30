import Bb from "backbone";
import CarouselItemModel from "./CarouselItem.model";

export default Bb.Collection.extend({
  model: CarouselItemModel,
  url: "carousel.json",
  parse: response => {
    let json = JSON.parse(response);
    for (var i = 0, l = json.length; i < l; i++) {
      json[i].visible = i < 4;
    }
    return json;
  }
});
