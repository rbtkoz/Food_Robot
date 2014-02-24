$(document).ready(function(){
  



  $("#scrape").click(function(event){
    event.preventDefault();
    var user = $('#exampleInputEmail1').val();
    var pass = $('#exampleInputPassword1').val()
    console.log(user +" " + pass);
     ajaxStart: $("body").addClass("loading"); 
    
    // $.ajax({
    // type: "POST",
    // url: 'http://127.0.0.1:8585',
    // data:'{"user": "' + user+ '", "pass": "' + pass + '"}',
    // dataType: 'json',
    // });
    
    $.ajax({
     
      url: 'http://127.0.0.1:8585',

      // data: "json_me",
      // type:"POST",
      // data:'{"user": "' + user+ '", "pass": "' + pass + '"}',
      type: 'GET',
      data: "json_me",
      crossDomain: true,
      dataType: 'json',
      // ajaxStop: function() { $body.removeClass("loading"); }   
      success: function(data) { 
       ajaxStop: $("body").removeClass("loading");
       // $(".yum").addClass( "btn btn-default" ); 
       // $(".yum").text( "Find Recipes" );


        //console.log(data); 
        // $.each(data, function(i, val) {
        //   console.log(i +val);
        //   // console.log(element.name);
        //     // $('ul.list').append("<li><h4>"+ i+"." + " "+val+"</h4></li>")
            
        //     if(i ===0){
        //       $('ul.list').append("<li><h4>"+val+"</h4></li>").css("background","red");
        //       // $('li').css('color', "red");
        //   }else{
        //     $('ul.list').append("<li><h4>"+val+"</h4></li>").css("background","blue");
        //     // $('li').css("color","blue");
        //   }

 

        // });

      for (var i=0; i<data.length;i++){
      console.log(i);
        if(i%2 ===0){
          $('ul.list').append("<li class ='1'><h4>"+data[i]+"</h4></li>");
          $("li.1").css("background","#f6f6f6 ");
          console.log("imhere");
          // console.log(i);
        }else{
          $('ul.list').append("<li class ='2'><h4>"+data[i]+"</h4></li>");
          $("li.2").css("background","#f1f1f1");
          console.log("imthere");
        }
      }
      // $(".list-title").css("display","block");
    }  
    });
  });

  $(".fa-info-circle").click(function(){

      alert("info");
  })

   $(".fa-facebook").click(function(){
      alert("social");
  })

   $(".fa-search").click(function(){
      alert("search");
  })
  
  $("#scrape").click(function(){
    alert("hello");
    $( "button ,.btn,.btn-default, #scrape" ).removeClass();
    $(".form-group, .and").css("display","none");
    $("#scrape").remove();
    $(".and").css("margin-left","300px");
     $(".form-control").css("margin-left","132px");
     $(".recipe").css("margin-top","0px");
  

    
  })

//   $('#recipe-search').click(function(event) {
// event.preventDefault();
// var recipestr = $('#recipe-value').val();
// var url = "http://www.yummly.com/api/recipesq="+keywords+"&_app_id=<snipped-app-id>&_app_key=<snipped-api-key>&";
// console.log(recipestr);
// $.ajax({
//   type: 'POST',
//   url: "http://127.0.0.1:8585",
//   data: recipestr,
//   success: function(msg) {
//     alert("success");  },
//   error: function(XMLHttpRequest, textStatus) {
    
//   }
// })
// })
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
        var data1 = data.matches;
        console.log(data);
         for (var i=0; i<data1.length;i++){
          
        if(i%2 ===0){
          $('ul.list-recipe').append("<li class ='1'><img src="+'"'+data1[i].smallImageUrls[0]+'"'+"<h4>"+data1[i].id+"</h4></li>");
          $("li.1").css("background","#f6f6f6 ");
          console.log("imhere");
          // console.log(i);
        }else{
          $('ul.list-recipe').append("<li class ='2'><img src="+'"'+data1[i].smallImageUrls[0]+'"'+"<h4>"+data1[i].id+"</h4></li>");
          $("li.2").css("background","#f1f1f1");
          console.log("imthere");
        }
      }
        },

       error: function(data, data2) { console.log(data); },
       //jsonp: false,
       //jsonpCallback: 'recipeGet'                                          
  });
});

});

