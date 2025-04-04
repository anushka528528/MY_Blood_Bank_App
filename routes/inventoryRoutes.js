const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddelware, getInventoryController);

//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddelware,
  getRecentInventoryController
);

//GET Hospital BLOOD RECORDS
router.get(
  "/get-inventory-hospital",
  authMiddelware,
  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/get-donars", authMiddelware, getDonarsController);

//GET Hospital RECORDS
router.get("/get-hospitals", authMiddelware, getHospitalController);

//GET Organisation RECORDS
router.get("/get-orgnisation", authMiddelware, getOrgnaisationController);

//GET Organisation RECORDS
router.get(
  "/get-orgnisation-for-hospital",
  authMiddelware,
  getOrgnaisationForHospitalController
);

module.exports = router;
