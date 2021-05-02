const express = require("express");
const mongoose = require("mongoose");
const image = require("./image");
const upload = require("./middleware");
const router = express.Router();

router.post("/upload/multiimage", upload.fields([{name:'file'}]), function (req, res) {
  console.log("image upload");
  console.log(req.files.file)
  const arrayImg=[]
  req.files.file.forEach(i => {
    arrayImg.push(i.filename)
  });
  const images = new image({
    image:arrayImg
  })
  images.save()
  .then(function(data){
    res.status(200).json({success: true})
  })
});


module.exports = router