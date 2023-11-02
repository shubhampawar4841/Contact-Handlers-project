const express=require("express");
const router=express.Router();
const {getContact}=require("..controllers/contactController");

router.route("/").get((req,res)=> {
    res.status(200).json({message:"get all Contacts"});
});
router.route("/:id").get((req,res)=> {
    res.status(200).json({message:`Get a contact ${req.params.id}`});
});
router.route("/").post((req,res)=> {
    res.status(200).json({message:"Create Contacts"});
});
router.route("/:id").put((req,res)=> {
    res.status(200).json({message:`Update Contat for ${req.params.id}`});
});
module.exports=router;
