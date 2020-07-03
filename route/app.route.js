const Router = require("express").Router;
const {findAll,Create} = require("../controller/user.controller");

const router=new Router()

router.route("/user").get(findAll);
router.route("/user").post(Create);

module.exports=router;