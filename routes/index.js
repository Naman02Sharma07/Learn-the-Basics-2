var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  //if everything would be right then resirect to the profile page 
  //else show me the waring and take me to the failed route

  //flash message allow us to use the data that has been created in this route in another route
  res.render('index');
});


router.get('/failed', function(req, res) {
  req.flash("age",29);//this is the way by which we create a flash to store the data 
  //the first is the name and the secong would be the data 
  // res.render('index');
  res.send("ban gaya bro flash ")

});


router.get('/checkkaro', function(req, res) {//this is for checking whether we are able to access the data that has been created in the falsh 
  console.log(req.flash("age"));
  res.send("check karlo backnd ke terminal")
});









router.get('/create',async function(req,res){
  let userdata = await userModel.create({
    username: "raj",
    nickname: "abhay",
    discription:"I dont know hat i do what i love to do  ",
    
  })
  res.send(userdata);
})


router.get('/find',async function(req,res){
  let regex = new RegExp("^SurBhi$","i");//here it will give all the name that start with the surbhi if i give parameter as Surbhi

  /**WHAT HAPPEN HERE IS */

  //When i write Naman in regex i get all the value that Naman as a prefix suffix or inbetween
  //but when i write Naman$ this means the name should be ends with the Naman
  //but when i write ^Naman this means the name should be start with Naman
  
  /**HERE I WANT EXACTLY Naman */

  //i do this instead ^Naman$ this means the name should be start with naman and ends with Naman so
  //however would be the name letter some are capital some are not the regex make them all insensitive 



  let user = await userModel.find({username:regex});//here the parameter in the find is case sensitive 
  //this means that if i try to find the any name and any of his leeter would be capital then i wont get any output it get blank array
  //find() will give the array of names
  //but findOne() give me a single user name
  res.send(user);
})


/**NOW  I WANT TO WRITE A CALL SUCH TO FIND THE USER THAT HAVE THE CATEGORY THAT I HAVE SELECTED  */


router.get('/findCategory',async function(req,res){
  let user = await userModel.find({categories: {$all:["docker",'express']}})//this will give me all the users that have express as one of the category
  //$all means the all the user
  //['express'] -> this will give an array of user
  res.send(user);
})

/**NOW I HAVE TO SEARCH FOR DOCUMENTS OF SPECIFIC TIME RANGE */

router.get("/date",async function(req,res){
  var date1 = new Date("2024-08-01");
  var date2 = new Date("2024-08-04");
  let user = await userModel.find({datecreated: {$gte: date1, $lte: date2}});

  /**NOW I AM GONNA TELL YOU EVRYTHING */
  //$gte-> this means greater than or equal to
  //$lte-> this meand less than or equal to
  //we get an array because of the find


  res.send(user);
})


/**NOW I HAVE TO FIND ALL THE DOCUMENTS ON THE BASIS OF FIELDS THAT EXIST IN THE  */

router.get("/field",async function(req,res){
  let user = await userModel.find({categories:{$exists:true}});
})



/**NOW I HAVE TO FIND FIELD DATA ON THE BASIS OF THE LENGTH */\


router.get("/fieldLength",async function(re))


 module.exports = router;
