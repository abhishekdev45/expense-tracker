const express = require("express");
const expenseControllers = require("../controllers/expense")

const router = express.Router();

router.post("/add-data",expenseControllers.postUserData);
router.get("/get-data",expenseControllers.getUserData);
router.delete("/delete-data/:id",expenseControllers.postDeleteData);
// router.delete("/update-data/:id",expenseControllers.updateData);




module.exports = router;