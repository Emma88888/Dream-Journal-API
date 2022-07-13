const express = require("express");
const router = express.Router();
const dreamController = require("../../controllers/dreams");

router.get("/", dreamController.getAll);

router.get("/:dream", dreamController.findById);

router.post("/", dreamController.create);

router.put("/:dream",dreamController.update);

router.delete("/:dream", dreamController.deleteOne);

module.exports = router;
