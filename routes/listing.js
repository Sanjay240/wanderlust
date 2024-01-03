const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const {isLoggedIn, isOwner, validateListing} = require("../middleware");
const listingController = require("../controllers/listing");
const multer = require("multer")
const {storage} = require("../cloudConfig");
const upload = multer({storage});

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createNewListing));

// new listing form 
 router.get("/new", isLoggedIn, listingController.createNewForm)
 
router.route("/:id")
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.editListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))
    .get(wrapAsync(listingController.showListing));
 
// edit listing form
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editForm))
 
 module.exports = router;