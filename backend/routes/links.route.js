const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const Link = require("../models/link.model");
const User = require("../models/user.model");
const dotenv = require("dotenv");

dotenv.config();
router.use(express.json());

router.post("/linkcreate", authMiddleware, async (req, res) => {
  const { bio, link, shop, banner } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.username) {
      return res
        .status(400)
        .json({ message: "Username is missing for this user" });
    }

    let existingLink = await Link.findOne({ user: req.user.id });

    if (existingLink) {
      if (bio) existingLink.bio = bio;
      if (banner) existingLink.banner = banner;

      if (link) {
        existingLink.link.push({
          linktitle: link.linktitle,
          linkurl: link.linkurl,
          application: link.application,
        });
      }

      if (shop) {
        existingLink.shop.push({
          shopname: shop.shopname,
          shopurl: shop.shopurl,
          application: shop.application,
        });
      }

      await existingLink.save();
      return res
        .status(200)
        .json({ message: "Link updated successfully", data: existingLink });
    } else {
      const newLink = new Link({
        username: user.username,
        bio,
        link: link
          ? [
              {
                linktitle: link.linktitle,
                linkurl: link.linkurl,
                application: link.application,
              },
            ]
          : [],
        shop: shop
          ? [
              {
                shopname: shop.shopname,
                shopurl: shop.shopurl,
                application: shop.application,
              },
            ]
          : [],
        banner,
        user: req.user.id,
      });

      await newLink.save();
      return res
        .status(201)
        .json({ message: "Link created successfully", data: newLink });
    }
  } catch (error) {
    console.error("Error creating/updating link:", error);
    res.status(400).json({ message: error.message || "An error occurred" });
  }
});

router.get("/linkdetails", authMiddleware, async (req, res) => {
  try {
    const link = await Link.find({ user: req.user.id });

    if (!link) {
      return res.status(404).json({ message: "Link details not found" });
    }

    res.status(200).json({ message: "Link details fetched", data: link });
  } catch (error) {
    console.error("Error fetching link details:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});

router.patch("/linkupdate", authMiddleware, async (req, res) => {
  const { bio, link, shop, banner } = req.body;

  try {
    let existingLink = await Link.findOne({ user: req.user.id });

    if (!existingLink) {
      return res.status(404).json({ message: "Link details not found" });
    }

    existingLink.bio = bio || existingLink.bio;
    existingLink.banner = banner || existingLink.banner;

    if (link) {
      existingLink.link = {
        linktitle: link.linktitle || existingLink.link.linktitle,
        linkurl: link.linkurl || existingLink.link.linkurl,
        application: link.application || existingLink.link.application,
      };
    }

    if (shop) {
      existingLink.shop = {
        shopname: shop.shopname || existingLink.shop.shopname,
        shopurl: shop.shopurl || existingLink.shop.shopurl,
        application: shop.application || existingLink.shop.application,
      };
    }

    await existingLink.save();

    res.status(200).json({
      message: "Link details updated successfully",
      data: existingLink,
    });
  } catch (error) {
    console.error("Error updating link details:", error);
    res.status(400).json({ message: error.message || "An error occurred" });
  }
});
module.exports = router;
