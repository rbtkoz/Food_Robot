$(document).ready(function(){
  
  
  $("#scrape").click(function(){
     ajaxStart: $("body").addClass("loading"); 

    console.log("iclicked");

    $.ajax({
     
      url: 'http://127.0.0.1:8585',
      data: "json_me",
      type: 'GET',
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
  
  $(".btn").click(function(){
    // alert("hello");
    // $( "button ,.btn,.btn-default, #scrape" ).removeClass();
    $("#scrape").remove();

    
  })

  
});

