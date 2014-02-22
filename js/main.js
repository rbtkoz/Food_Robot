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

        //console.log(data); 
        $.each(data, function(i, val) {
          console.log(i +val);
          i = i+1;
          // console.log(element.name);
            $('.list').append("<h4>"+ i + " "+val+"</h4>")

        });
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
  
});

