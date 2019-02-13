$("button").click(function(){
   var ans1= $(".name").val();
   var ans2=$(".food").val();
   var ans3=$(".timesEaten").val() * 2928;
   $("#results").text("Hello " + ans1 + ",by the year 2080," + " you will have eaten " + ans2 +  " " + ans3 + " times.");
   });
