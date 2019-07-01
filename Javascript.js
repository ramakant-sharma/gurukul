    var images = ["Images/background13.jpg",
                 "Images/background17.jpg",
                "library-imags/books1.jpg",
                 "library-imags/books2.jpg",
                 "images/student1.jpg"
                 ];
    var i = 0;
    
    function slides(){
        
        document.getElementById('slideimage').src =images[i];
        if(i<(images.length-1))
            i++;
        else{
            i=0;
        }
    }
    setInterval(slides, 5000);


//    var d =new Date();
// document.getElementById("currentdate").innerHTML = d.toLocaleDateString()+" "+d.toLocaleTimeString();



//
var myVar = setInterval(myTimer, 1000);
function myTimer() {
//   var d = new Date();
//   document.getElementById("currentdate").innerHTML = d.toLocaleTimeString();


  var a = new Date();
  var days = new Array(7);
  days[0] = "Sunday";
  days[1] = "Monday";
  days[2] = "Tuesday";
  days[3] = "Wednesday";
  days[4] = "Thursday";
  days[5] = "Friday";
  days[6] = "Saturday";
  var r = days[a.getDay()];

 
 
  
    

  document.getElementById("currentdate").innerHTML = r  +" " + a.toLocaleTimeString();
}
document.getElementById("currentdate").innerHTML = myTimer();



     document.getElementById("btn1").addEventListener("click", function(){
        
        document.getElementById("AnnualFunction").style.display = "block";
         document.getElementById("FarewellCeremony").style.display = "block";
         document.getElementById("students").style.display = "block";
         document.getElementById("visits").style.display = "block";
         
         
        
    })
     
     
     document.getElementById("btn2").addEventListener("click", function(){
        
        document.getElementById("AnnualFunction").style.display = "block";
         document.getElementById("FarewellCeremony").style.display = "none";
         document.getElementById("students").style.display = "none";
         document.getElementById("visits").style.display = "none";
         
        
    })
     
          document.getElementById("btn3").addEventListener("click", function(){
        
        document.getElementById("AnnualFunction").style.display = "none";
         document.getElementById("FarewellCeremony").style.display = "block";
         document.getElementById("students").style.display = "none";
         document.getElementById("visits").style.display = "none";
        
    })
               document.getElementById("btn4").addEventListener("click", function(){
        
        document.getElementById("AnnualFunction").style.display = "none";
         document.getElementById("FarewellCeremony").style.display = "none";
         document.getElementById("students").style.display = "block";
         document.getElementById("visits").style.display = "none";
        
    })
           document.getElementById("btn5").addEventListener("click", function(){
        
        document.getElementById("AnnualFunction").style.display = "none";
         document.getElementById("FarewellCeremony").style.display = "none";
         document.getElementById("students").style.display = "none";
         document.getElementById("visits").style.display = "block";
        
    })
           