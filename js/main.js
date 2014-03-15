$(document).ready(function(){
  var pass =$("#exampleInputPassword1");
  var user =$("#exampleInputEmail1");
  $('#fd').validate({ // initialize the plugin
    rules: {
            user : {
                  required: true,
                  email: true
              },
            pass : {
                  required: true,
                  minlength: 2
              }
          }
  });

  function validator(){
    return $('#fd').valid();
  }

  $("#slides").slidesjs({
    play: {
      active: false,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 5000,
        // [number] Time spent on each slide in milliseconds.
      auto: true,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    }
  });
    

  var MyCartArray;
  $("#scrape").click(function(event){
    event.preventDefault();
    if (validator()){
      // console.log(user +" " + pass);
      ajaxStart: $("body").addClass("loading"); 
      $.ajax({
        url: 'http://tranquil-escarpment-5933.herokuapp.com/',
          // url: 'http://fathomless-hollows-6855.herokuapp.com/',
          // url: 'http://127.0.0.1:8585',
        data: {
                        // data: "json_me",
                        user:  '*'+$('#exampleInputEmail1').val()+'*',
                        pass: '*'+$('#exampleInputPassword1').val()+'*'
                    },
        type: 'GET',
          // data: "json_me+param",
        crossDomain: true,
        dataType: 'json',
        success: function(data) { 
          MyCartArray =data;
          if( !$.isArray(MyCartArray) ||  !MyCartArray.length ) {
            //handler either not an array or empty array
            $("body").removeClass("loading");
            $("#exampleInputPassword1").toggleClass("inactive");
            $("#exampleInputEmail1").toggleClass("inactive");
            $("#scrape").toggleClass("inactive");
            $(".title-cart").css("display","none"); 
            $(".alert-danger").toggle("activate");
            // alert("Sorry try again. Wrong username or password or your cart is empty");
          }else{
            ajaxStop: $("body").removeClass("loading");
            $(".alert-danger").css("display","none");
            MyCartArray =data;
            for (var i=0; i<data.length;i++){
              console.log(i);
              if(i%2 ===0){
                $('ul.list').append("<li class ='one'><h4>"+data[i]+"</h4></li>");
                $("li.one").css("background","#f6f6f6 ");
                console.log("imhere");
                // console.log(i);
              }else{
                $('ul.list').append("<li class ='two'><h4>"+data[i]+"</h4></li>");
                $("li.two").css("background","#f1f1f1");
                console.log("imthere");
              }
            }
            // $(".list-title").css("display","block");
          }
        }
      });
    }
    return MyCartArray;
  });

    $(".fa-info-circle").click(function(){
      // alert("info");
      $(".info-text").toggleClass("active");
      // $(".info-text")
    })
    
    $(".fa-facebook").click(function(){
      $(".info-text").toggleClass("active");
    })

    $(".fa-search").click(function(){
      $(".info-text").toggleClass("active");
    })
    
    $("#scrape").click(function(){
      if (validator()){
        $("#exampleInputPassword1").toggleClass("inactive");
        $("#exampleInputEmail1").toggleClass("inactive");
        $("#scrape").toggleClass("inactive");
        $(".title-cart").css("display","inline-block"); 
      } 
    });

  $('#recipe-search').click(function(event) {
    event.preventDefault();
    var keywords = $('#recipe-value').val();
    var ID="d77dde75";
    var KEY="4a28aa62c4333836b11ef718e632218f";
    console.log(keywords);
    var url ="http://api.yummly.com/v1/api/recipes?_app_id=d77dde75&_app_key=4a28aa62c4333836b11ef718e632218f&q="+keywords+"&requirePictures=true";  
    // var url ="https://api.yummly.com/v1/api/recipes?"+keywords+"&_app_id="+ID+"&_app_key="+KEY;   
    //to get ingredients
    //http://api.yummly.com/v1/api/recipe/Chipotle-Popcorn-Chicken-512508?_app_id=d77dde75&_app_key=4a28aa62c4333836b11ef718e632218f
    $.ajax({                                                                            
      type: 'GET',
      url: url,
      dataType: 'jsonp',
      //dataType: 'jsonp json'
      success: function(data) { 
      //reset
        $('ul.list-recipe').empty();
        var data1 = data.matches;
        var ext_recipe ="http://www.yummly.com/recipe/external/";
        console.log(data);
        for (var i=0; i<data1.length;i++){
          if(i%2 ===0){
            $('ul.list-recipe').css("list-style","none").append("<li class ='edno'><img src="+'"'+data1[i].smallImageUrls[0]+'"'+"><a target='_blank' href="+ ext_recipe+ data1[i].id+"><h4 class ='title1'>"+data1[i].recipeName+"</h4></a><i class='fa fa-check fa-3x'></i>"+"<ul class='four' id ="+data1[i].id +"></ul>");
            // $(".1").append("<ul class ='ingredients'></ul");        +'"'+"><h4>"+data1[i].id+'</h4></ul>'
            // $("#"+data1[i].id).css("display","none");
            $("#"+data1[i].id).toggle();
            // console.log(data2.id+"<--data2var here in 1");
            for(var z=0; z<data1[i].ingredients.length;z++){
              // console.log(z+ "I am variable z");
              // console.log(data1[i].ingredients.length+ "length of ingredients");
              $('#'+data1[i].id).css("list-style","none").append("<li><h4>"+data1[i].ingredients[z]+"</h4></li>");
            }
            console.log(data1[i].ingredients);
            
            $("li.edno").css("background","#f6f6f6");
            console.log("im_Here");
            // console.log(i);
            }else{
              $('ul.list-recipe').append("<li class ='dve'><img src="+'"'+data1[i].smallImageUrls[0]+'"'+"><a target='_blank' href="+ ext_recipe+ data1[i].id+"><h4 class ='title1'>"+data1[i].recipeName+"</h4></a><i class='fa fa-check fa-3x'></i><ul class='four' id ="+data1[i].id +"></ul>");
              // $("."+data1[i].id).css("display","none");
              // console.log(data2.id+"<--data2var here in 2");
              $("#"+data1[i].id).toggle();
              for(var y=0; y<data1[i].ingredients.length;y++){
                // console.log(y+ "I am variable y");
                // console.log(data1[i].ingredients.length+ "length of ingredients");
                $('#'+data1[i].id).css("list-style","none").append("<li><h4>"+data1[i].ingredients[y]+"</h4></li>");
              }
            console.log(data1[i].ingredients);
            $("li.dve").css("background","#f1f1f1");
            console.log("im_There");
          }
          // $('.list-recipe').on('click', 'li', function() {
          // $("li").append("<ul class ='ingredients'><li>"+data1[0].ingredients+"</ul></li>")
          // });
        }
      },
      error: function(data, data2) { console.log(data); },
      //jsonp: false,
      //jsonpCallback: 'recipeGet'                                          
    });
  });

  // $('li.1').live('click',function(){
  //   alert("clicke"+this);
  // })

  // $('.list-recipe').on('click',"h4", function(){
  //   $(this).css("font-size","40px");
  // });

  $('.list-recipe').on('mouseenter','li',function(){
      $('li').css("cursor","pointer");
    });

  $('body').on('click','li',function(){
    $(this).find("ul").toggle();

     $(this).find("i").toggleClass("green");

    var recipeArray = [];
    var recipeArray3 =[];
    var sorted=[];
    var string_sorted;
    var sorted3 =[];
    $(this).find(".four li").each(function(n,v){
      recipeArray.push($(this).text());
      // console.log(recipeArray);
      return recipeArray;
      
  });
  for(i =0; i<MyCartArray.length; i++){
    // console.log(MyCartArray.length+"mycartlength");
    sorted.push(MyCartArray[i].toLowerCase());
    // console.log(sorted.length +"sorted length")
    sorted1 = sorted.join(",");
    var sorted2=sorted1.replace(/[^a-z\s]|farm|bag|resealable|local|wild|extra|hand|cut|fresh|gallon|lb|oz|pkg|med|seeds|seed|freshdirect|pack|ct|pint|/gi,'');
    sorted3 = sorted2.split(" ");
    // console.log(sorted3.length +"sorted3 length")
    // console.log(sorted3 +"This is sorted1"+ sorted3[3]+sorted3[5]);
    // string_sorted= sorted.join();
    // sorted_1 =string_sorted.split(" ");
    // console.log(sorted_1+"sorted");
  }


  for(x =0; x<recipeArray.length; x++){
       var recipeArray1 = recipeArray.join(","); 
       var recipeArray2 = recipeArray1.replace(/[^a-z\s]/gi," ");
       // console.log(recipeArray2+"recipeArray2");
       recipeArray3 =recipeArray2.split(" ");

       }

  for(i =0; i<sorted3.length; i++){
    // console.log(sorted3.length+"sorted3length in for loop");
      for(x =0; x<recipeArray3.length; x++){
       // var recipeArray1 = recipeArray.join(","); 
       // var recipeArray2 = recipeArray1.replace(/[^a-z\s]/gi," ");
       // // console.log(recipeArray2+"recipeArray2");
       // recipeArray3 =recipeArray2.split(" ");

       // console.log(recipeArray3);
    // if (recipeArray[i]===MyCartArray[x]){
    if  (sorted3.indexOf(recipeArray3[x].toLowerCase()) > -1){
      var foo = recipeArray3[x];
      console.log("We have a match"+sorted3[i]+" -------->"+recipeArray3[x] + "WEHAV IT!!!!!!!!!!!!");
      // $("."+recipeArray[x]).css("color","red");
     // if($("li").parent().hasClass('four')){
        
      $('.four li:contains('+'"'+foo+'"'+')').filter(function(){
        return $(this).css("background-color","#329932");});
        $(".edno").css("background-color","#f1f1f1");
        $(".dve").css("background-color","#f6f6f6");
      // $('li:contains('+'"'+foo+'"'+')').csss("background-color","#329932");
      // $(this).find("ul li").text(recipeArray[x])
  // }
    }else{
      // if($("ul").parent().hasClass('four')){
        $('.four li:contains('+'"'+recipeArray3[x]+'"'+')').css("background-color","#ff4c4c");
      // }else{
        // $("li").css("background-color","none");
        // $("li").hasClass("four").css("background-color","none");
    // }

  // console.log("nothing");

      // console.log(recipeArray[i]+"Sorry no matches"+MyCartArray[x]);
    }

  }
  var recipeArray3 = [];
   } // $(this).css("font-size","18px");
    })

  // $('body').on("click","li",function(){
  //   $(this).find(".fa-check").toggle(function(){
  //     $(this).css("color","white");
  //   }, function(){
  //     $(this).css("color","white");
  //   });


    $('body').on("click","li i .fa",function(){
      $(this).toggleClass("green");
    });



  //   .toggle(function () {
  //     $("#user_button").css({borderBottomLeftRadius: "0px"});
  // }, function () {
  //     $("#user_button").css({borderBottomLeftRadius: "5px"});
  // });
    // $(this).find(".fa-check").toggle().css("background-color","green");
  //   $(this).find(".fa-check").toggle(function(){
  //     $(this).css("color","green");
  //   }, function(){
  //     $(this).css("color","green");
  //   });
  // })
    // alert("hello");
      // $(this).css("display","inline-block");


  // $(".list-recipe ul").click(function(){
  //   // $(this).css( 'cursor', 'pointer' );

  //   alert("clicke"+this);
  // });
});

