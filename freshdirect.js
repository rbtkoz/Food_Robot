//require(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
// });




//not working for sure
// var user = "kozovski.a@gmail.com";
// var pass = "Somadog21!";
// var casper = require('casper').create();
// casper.start('https://www.schoology.com/login');

// casper.thenEvaluate(function(user, pass) {
//     document.querySelector('input[name="mail"]').setAttribute('value', term);
//     document.querySelector('input[name="pass")').setAttrribute('value', pass);
//     document.querySelector('input[name="op"]').submit();
// }, 'login');

// casper.then(function() {
//     this.evaluateOrDie(function() {
//         return /message sent/.test(document.body.innerText);
//     }, 'sending message failed');
// });

// casper.run(function() {
//     this.echo('message sent').exit();
// });

// casper.run();



//-------------------------------------------------------------

// var casper = require('casper').create();


// casper.start('https://www.schoology.com/login', function() {
//     this.fill('form#s-user-login-form', {
//         "mail": 'kozovski.a@gmail.com',
//         "pass":'Somadog21!'
//     }, true);
// });

// // casper.click('input#edit-submit');



// casper.then(function() {
//     this.evaluateOrDie(function() {
//         return /message sent/.test(document.body.innerText);
//     }, 'sending message failed');
// });

// casper.run(function() {
//     this.echo('message sent').exit();
// });
//-----------------------------------------------------------
// var casper = require('casper').create();


// casper.start('https://www.freshdirect.com/login/login_main.jsp', function() {
//     this.fill('form[name="fd_login"]', {
//         "userid": 'kozovski.a@gmail.com',
//         "password":'mypassword'
//     }, true);
// });

// // casper.click('input[type="image"][name="check_access]');



// casper.then(function() {
//     this.evaluateOrDie(function() {
//         return /message sent/.test(document.body.innerText);
//     }, 'sending message failed');
// });

// casper.run(function() {
//     this.echo('message sent').exit();
// });


// -------------------------------------------------

/*jslint browser: true, regexp: true */
/*global casper, require */
 
// var LOGIN_URL, LOGIN_USERNAME, LOGIN_PASSWORD, casp;
 
// casp = require('casper').create({
//      viewportSize: {
//           width: 1024,
//           height: 768
//      },
//      verbose: true,
//      logLevel: 'warning'
// });
 
// if (!casp.cli.has('username') && !casp.cli.has('password')) {
//      casp.echo('Usage: $ casperjs freshdirect.js --username=USERNAME --password=PASSWORD').exit(-1);
// }
 


//      LOGIN_URL = 'https://www.freshdirect.com/login/login.jsp';

 
// LOGIN_USERNAME = casp.cli.get('username');
// LOGIN_PASSWORD = casp.cli.get('password');
 
// casp.start(LOGIN_URL, function () {
//      'use strict';
 
//      this.log('Logging in', 'debug');
//      this.fillXPath('form[name="fd_login"]', {
//           '//input[@name="userid"]': LOGIN_USERNAME,
//           '//input[@name="password"]': LOGIN_PASSWORD
//      }, true);
 
//      this.log('Logged in', 'debug');
// });
 
// casp.then(function () {
//      'use strict';
 
//      this.echo('We\'re logged in.  Now we can do more stuff like take a screenshot!');
                                                       
//      this.waitForSelector('body', function () {
//           this.captureSelector('test.png', 'html');
//           this.log('saved screenshot of ' + this.getCurrentUrl() + 'to test.png', 'warning');
//      }, function () {
//           this.die('Timeout reached');
//           this.exit();
//      }, 12000);
// });
 
// casp.run();


//--------------------------------------------------------
// var ip_server = '127.0.0.1:8585';
var server = require('webserver').create();

  var system = require('system');
  var fs     = require('fs');
  var port   = system.env.PORT || 8585;
  console.log(port +" I am binding to this port");
  var url = require('url');
  console.log("I just required url");
//-------------------------------------------------------
/*jslint browser: true, regexp: true */
/*global casper, require */
var service = server.listen(port, function(request, response) {
  var items_arr= [];
  var LOGIN_URL, LOGIN_USERNAME, LOGIN_PASSWORD, casp;
  var utils = require('utils');
  var queryData = url.parse(request.url, true).query;
  console.log(queryData);
  //var re = new RegExp('\s*"selected[^>]*>(.*?)b');
   
// request('/login', (request, response) ->
//     console.log(data);
//   };
  
// router.get'/login',(request, response) ->
// console.log(data);

  casp = require('casper').create({
       viewportSize: {

            width: 1024,
            height: 768
       },
       verbose: true,
       logLevel: 'warning'
  });
   
  // if (!casp.cli.has('username') && !casp.cli.has('password')) {
  //      casp.echo('Usage: $ casperjs freshdirect.js --username=USERNAME --password=PASSWORD').exit(-1);
  // }
   


       // LOGIN_URL = 'https://www.schoology.com/login';
       LOGIN_URL = 'https://www.freshdirect.com/login/login.jsp?successPage=/your_account/manage_account.jsp';
       //LOGIN_URL = 'https://www.freshdirect.com/view_cart.jsp';
       // LOGIN_URL= "https://www.freshdirect.com/login/login.jsp";
       // LOGIN_URL ="https://www.freshdirect.com/index.jsp";
   
  // LOGIN_USERNAME = casp.cli.get('username');
  // LOGIN_PASSWORD = casp.cli.get('password');


  LOGIN_USERNAME = 'kozovski.a@gmail.com'
  LOGIN_PASSWORD = 'mypassword'
  // casp.start (function(){
  // this.click('.loginButton');
  // });
// router.get '/', (request, response) ->
//   response.end 'Home page'
  casp.start(LOGIN_URL, function () {
       'use strict';


        // console.log("GOT HTTP REQUEST");
        // console.log(JSON.stringify(request, null, null));

        // // we set the headers here
        // response.statusCode = 200;
        // // response.headers = {"Cache": "no-cache", "Content-Type": "text/html"};
        // // // this is also possible:
        // // response.setHeader("foo", "bar");
        // // // now we write the body
        // // // note: the headers above will now be sent implictly
        // // response.write("<html><head><title>YES!</title></head>");
        // // // note: writeBody can be called multiple times
        // // response.write("<body><p>pretty cool :)</body></html>");
        // response.close();
   
      
      this.click('.loginButton');
      this.log('Logging in', 'debug');
      this.fill('form#login_cont_formContentForm', {
            'userId': LOGIN_USERNAME,
            'password': LOGIN_PASSWORD
       }, true); 
       this.wait(2000);
       this.mouse.move(".cart");
       // this.wait(5000);
       this.log('Logged in', 'debug');
       // this.click('a.cart');
       // this.echo("body");
  });
   


  casp.then(function () {
       'use strict';
   
       this.echo('We\'re logged in.  Now we can do more stuff like take a screenshot!');
                                                         
       this.waitForSelector('body', function () {
            this.captureSelector('test.png', 'html');
            this.log('saved screenshot of ' + this.getCurrentUrl() + 'to test.png', 'warning');
       }, function () {
            this.die('Timeout reached');
            this.exit();
       }, 12000);
  });


   casp.then( function() {
    
      //this.echo(this.fetchText(".item"));
      // Get info on all elements matching this CSS selector
      var items_selector = '.item';
      // var items_selector = ".cartline";
      // var items_selector = "tbody tr td";
      // var qty_selector = '.qty'; //to get qty element
      // var quantity_selector = "td.quantity .quantity select";// to get if it's in drop down

    var items = this.getElementsInfo(items_selector); // an array of object literals
    // var qty = this.getElementsInfo(qty_selector); //for qty
    // var quantity = this.getElementsInfo(quantity_selector); //for quantity
    
    // Pull out the var text and push into the array
    
    for (var i = 1; i < items.length; i++) {
      // items_arr.push(qty[i].attributes.value);
      // items_arr.push(items[i].text);
      // items_arr.push(items[i].text);
      // items_arr.push(items[i].html);
      items_arr.push(items[i].text);

    }
    this.echo(items_arr.length+" items in cart")
    
  // if(quantity){
  //     for (var i = 0; i < quantity.length; i++) { //may need to modify this to a more generic element
      
  //         items_arr.push(re.exec(quantity[i].tag));
  //     }
  //     // this.echo(quantity[i].select.option)
  // };

  // for (var i = 0; i<qty.length; i++) {
  //     items_arr.push(qty[i].attributes.value);   
  //         }
      
      // this.echo(items_arr.length+"quantity")
    // Dump the contents of array to screen
    
    utils.dump(items_arr);
    // return items_arr;
    this.click('.logoutButton');
    console.log("I just clicked back");
  });
  
   
  // casp.then(LOGIN_URL, function () {
  //   console.log("back to main page");
  //             });
      
//       casp.on('resource.requested', function (response) {
//   console.log('Request ' + JSON.stringify(response, undefined, 4));
// });



      casp.run(function() {
             
              response.statusCode = 200;
              response.headers= { 'Access-Control-Allow-Origin': '*' }
              //sends results as JSON object
              var json_me= response.write(JSON.stringify(items_arr, null, null));
              // var us= request.write(data);
              // console.log(us+"is this something");
              response.close();


      //         casp.die(function(){
      //   utils.dump("Casper is out, peace");
      // });
              // utils.dump(items_arr);              
      });


   // casp.run();   
  });

    // alert("clicked");
    
      
console.log('Server running at http://');

