Today we are gonna learn some new things:

What is flash screen basically?

A flash is the message that appear on the front end side whenever we enter any credential or any other thing wrong or we want to show message some ecreen on the screen 

One important thing is that before installing or using the flash on your system you must have an express sesion on your system

steps:

1. install conect-flash
2. make sure you setup express-session
3. make sure you put connect flash in app.use function
3. create a flash in any route 
4. try to run that flash on any other route apart from the route you have created 

NOTE: YOU CANNOT RUN A FLASH WITHOUT INSTALLING THE EXPRESS-SESSION


flash route basically mean create a data in some part of the route and the use that data in another route 


//THIS IS THE WAY WE PASS THE DATA FROM ONE ROUTE TO ANOTHER BUT THAT WON'T BE POSSIBLE 

router.get('/', function(req, res) {
    var a =10;
  res.render('index');
});

router.get('/contacts', function(req, res) {
    console.log(a);//so here we cannot use this a that we have created in another route 
  res.render('index');
});

//THE POSSIBLE WAY TO MAKE IT WORK--------------



//SO TO MAKE IT SUCCESSFUL WE USE TO CREATE A GLOBAL VARIABLE 


var a=100//here we create a global variable 

router.get('/', function(req, res) {
    a=10;//we change the value of a 
  res.render('index');
});

router.get('/', function(req, res) {
    console.log(a);//here we print the value of a
  res.render('index');
});

//BUT CREATING AGLOBAL VARIABLE SO THAT EVERYTIME YOU PASS A NEW DATA TO ANOTHER IS NOT A GREAT IDEA 