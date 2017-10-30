import Bb from "backbone";

export default Bb.Model.extend({
  defaults: {
    title: "",
    images: [],
    visible: false,
    randomImage: ""
  }
});
