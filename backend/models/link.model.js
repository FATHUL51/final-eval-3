const mongoose = require("mongoose");
const Linkschema = new mongoose.Schema({
  image: {},
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  link: [
    {
      linktitle: {
        type: String,
      },
      linkurl: {
        type: String,
      },
      application: {
        type: String,
        enum: ["Facebook", "Instagram", "Twitter", "YouTube"],
      },
    },
  ],
  shop: [
    {
      shopname: {
        type: String,
      },
      shopurl: {
        type: String,
      },
      application: {
        type: String,
        enum: ["Shopify", "WooCommerce", "BigCommerce", "Magento"],
      },
    },
  ],
  banner: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Link = mongoose.model("Link", Linkschema);
module.exports = Link;
